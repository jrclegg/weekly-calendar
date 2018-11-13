import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import styled from 'styled-components'
import Project from './project.js'
import Slots from './slots.js';
import Link from './ui-components/link.js'
import Name from './ui-components/name.js';

const slotsInDay = 8;
const daysInWeek = 5;
const maxAvailableSlots = slotsInDay * daysInWeek;

const DropdownContainer = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 140px;
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
`

const SlotsContainer = styled.div`
  width: 90%;
  position: relative;
  height: 100%;
  display: inline-block;
  margin-bottom: -50px;
`

const WeekDiv = styled.div`
  clear: both;
  margin: 0;
  height: 100px;
`
// set items array in constructor
// set projects array
// set dropdownisVisible to be false
// set an element called dropDownPosition to have a property of left
class User extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      dropdownisVisible: false,
      items: [],
      dropDownPosition: {
        left: 0
      },
      nextAvailableSlot: 0,
      defaultSlotCount: 1,
      maxAvailableSlots: maxAvailableSlots,
      totalUsedSlots: 0,
      totalAvailableSlots: maxAvailableSlots,
      activeSlot: null
    }
    // Create a ref and attach it to an instance on the dropdown div element
    this.dropdownContainer = React.createRef();
  }

  // items array is populated with data from database
  componentDidMount() {
    // Adds a click event listener to the dropdown element
    document.addEventListener('click', this.handleClickOutside, true);
    // The fetch method takes one argument, the path to the resource you want to fetch
    fetch('http://localhost:8080/projects')
    // transform the response(results) into json
      .then(results => results.json())
    // then set the response(results) to populate the items array
      .then(results => this.setState({ items: results }));
  }

  // a function that 'unmounts' the click event listener added in component did mount
  componentWillUnmount() {
    // Removes the click event listener from the dropdown element
    document.removeEventListener('click', this.handleClickOutside, true);
  }

   onDragOver = (e) => {
     e.preventDefault();
     // needs to extend the width
   }

   onDragStart = (e, project, projectIndex) => {
     const data = {
       ...project,
       projectIndex: projectIndex
     }
     e.dataTransfer.setData('project', JSON.stringify(data))
   }

   onDrop = (e, index) => {
     e.preventDefault();
     const project = JSON.parse(e.dataTransfer.getData('project'))
     const { items } = this.state

     const itemIndex = items.findIndex(item => item.name === project.name)
     const data = {
       project: {
         ...project,
         itemIndex: itemIndex
       },
       slotIndex: index
     }
     // Which slot have we have dropped onto?
     this.resizeProject(data)
     e.stopPropagation();
   }

  // Adds a new project to the timeline
  addProject = (projectIndex, slotIndex) => {
    const {
      projects, defaultSlotCount, totalAvailableSlots, nextAvailableSlot, items
    } = this.state
    // pass in the project name
    // get the default slot count from the state
    const projectExists = projects.find(project => project.startAtSlot === slotIndex)
    if (projectExists) {
      return false;
    }


    const newProjectSlotCount = defaultSlotCount;
    // if total available slots is less than the slot for a new project
    if (totalAvailableSlots < newProjectSlotCount) {
      // then alert no room
      alert('no room!');
      return '';
    }
    // otherwise get the project
    // This represents the individual project being rendered
    const project = items[projectIndex];
    // create a new project to be added each time a link is clicked
    // Assign a slot count (project width), current starting slot position
    // and project name is taken from the projects database
    const newProject = {
      slotCount: newProjectSlotCount,
      startAtSlot: slotIndex,
      name: project.name,
      color: project.colour
    }

    // Here we are updating the empty projects array with
    // a new project every time the addProject function fires

    // We also increment nextAvailableSlot by one slot every time the addProject function fires
    this.setState({
      projects: [...projects, newProject],
      nextAvailableSlot: nextAvailableSlot + newProjectSlotCount,
      dropdownisVisible: false
    });
    // Fire the recalculateSlots function every time a new project is added
    return this.recalculateSlots(newProjectSlotCount);
  }


  // This function sets the position of the dropdown menu when a slot is clicked
  // The position of the dropdown will change depending on which slot is clicked
  // The slotBeingClicked argument is passed in
  positionDropdown = (slotBeingClicked, index) => {
    // set a position variable to target the
    const position = slotBeingClicked.target.getBoundingClientRect()
    // take the position of the button
    this.setState({
      dropDownPosition: {
        left: position.left
      },
      dropdownisVisible: true,
      activeSlot: index
    })
  }


  // a function that fires when the user clicks outside of the dropdown menu
  // the passed in event is the click event outside the dropdown
  handleClickOutside = (event) => {
    // if the dropdown container is not null and the dropdown container
    // doesn't contain the element you clicked on
    if (this.dropdownContainer.current != null
      && !this.dropdownContainer.current.contains(event.target)) {
      // set dropdownisVisible
      this.setState({
        dropdownisVisible: false
      });
    }
  }


  resizeProject = (data) => {
    const { totalUsedSlots, totalAvailableSlots, nextAvailableSlot } = this.state
    const newSlotCount = data.slotIndex - (data.project.startAtSlot - 1);
    const oldSlotCount = data.project.slotCount
    const grownBy = newSlotCount - oldSlotCount
    // const prevSlot = data.project.projectIndex - 1
    // const currentSlot = data.project.


    const newState = update(this.state, {
      projects: {
        [data.project.projectIndex]: {
          slotCount: { $set: newSlotCount }
        }
      },
      totalUsedSlots: { $set: totalUsedSlots + grownBy },
      totalAvailableSlots: { $set: totalAvailableSlots - grownBy },
      nextAvailableSlot: { $set: nextAvailableSlot + grownBy }
    })

    // console.log(newState)
    this.setState({
      ...newState
    })
    console.log(data.project.projectIndex)
  }

  // Every time a new slot is added increment the totalUsedSlots by one slot
  // Every time a new slot is added decrement the totalAvailableSlots by one slot
  recalculateSlots(slotsAdded) {
    const { totalUsedSlots, totalAvailableSlots } = this.state
    this.setState({
      totalUsedSlots: totalUsedSlots + slotsAdded,
      totalAvailableSlots: totalAvailableSlots - slotsAdded,
      nextAvailableSlot: totalUsedSlots + slotsAdded,
    })
  }

  // Pass in the index of the project to be deleted
  // Slice the current projects array in two parts
  // The first part will be sliced starting at index 0 and ending with the index
  // of the deleted project
  // The second part will be sliced at the deleted index + 1 (so if the deleted
  // project was at index 2 this part will be sliced at index 3)
  // The two parts are then expanded and combined in a new updated projects array
  // using the spread operator
  deleteProject(index) {
    const { projects } = this.state

    // eslint-disable-next-line prefer-destructuring
    const slotCount = projects[index].slotCount
    this.setState(prevState => ({
      projects: [...prevState.projects.slice(0, index), ...prevState.projects.slice(index + 1)],
      //  nextAvailableSlot: this.state.nextAvailableSlot - deletedProject.slotCount,
    }))
    this.recalculateSlots(-slotCount);
  }

  render() {
    const { name } = this.props
    const {
      projects, dropdownisVisible, activeSlot, dropDownPosition, items
    } = this.state
    // create a stateless Dropdown component
    const Dropdown = props => (
      // give the parent element an inline style with a property of left
      <DropdownContainer innerRef={this.dropdownContainer} style={{ left: props.position.left }}>
        {props.items.map((item, index) => (
          <Link
              // onClick={() => { this.addProject(index, props.slotIndex); }}
            addProject={() => this.addProject(index, props.slotIndex)}
            key={item.project_id}
            projectId={Number(item.project_id)}
            index={index}
            projectName={item.name}
          />
        ))}
      </DropdownContainer>
    )
    return (
      <WeekDiv>
        <Name name={name} />
        <SlotsContainer>
          <Slots
            onDragOver={(e, index) => { this.onDragOver(e, index); }}
            onDrop={(e, index) => { this.onDrop(e, index); }}
            onButtonClick={this.positionDropdown}
          />
          <div>
            {projects.map((project, index) => (
              <Project
                key={index}
                index={index}
                name={project.name}
                color={project.color}
                slotCount={project.slotCount}
                startAt={project.startAtSlot}
                onDrag={() => { this.onDrag(); }}
                onDragStart={(e) => { this.onDragStart(e, project, index); }}
                onDragOver={(e) => { this.onDragOver(e); }}
                deleteProject={() => { this.deleteProject(index); }}
              />
            ))}
          </div>
        </SlotsContainer>
        {dropdownisVisible
        && <Dropdown slotIndex={activeSlot} position={dropDownPosition} items={items} />
        }
      </WeekDiv>
    )
  }
}

// onDeleteProject(index, numberOfSlots){
//   console.log(this.state.nextAvailableSlot)
//   //this.updateProjectStartAtSlots(index+1, numberOfSlots);
// }

// updateProjectStartAtSlots(fromIndex, numberOfSlots){
//   // Get projects to update
//   const projectsToUpdate = this.state.projects.filter((project, index) => index+1 > fromIndex);
//   // loop through projects and update startatSlots
//   projectsToUpdate.map((project, index) => {
//     project.startAtSlot -= numberOfSlots
//   })
// }


export default User;
