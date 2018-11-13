import React, { PureComponent } from 'react';
import {slotLength, Project, Row, Link} from './grid.js'

const slotsInDay = 16;
const daysInWeek = 5;
const maxAvailableSlots = slotsInDay * daysInWeek;

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      nextAvailableSlot: 0,
      items: [],
      id: "",
      savePrevious: [],
      defaultSlotCount: slotsInDay,
      maxAvailableSlots: maxAvailableSlots,
      totalUsedSlots: 0,
      totalAvailableSlots: maxAvailableSlots
     }
  }


componentDidMount(){
      fetch('http://localhost:8080/projects')
          .then(results => results.json())
          .then(results => this.setState({'items': results}));
}

  addProject = (itemIndex) => {
    const newProjectSlotCount = this.state.defaultSlotCount;
    if(this.state.totalAvailableSlots < newProjectSlotCount){
      alert('no room!');
      return
    }
    const project = this.state.items[itemIndex];
    const newProject = {
      slotCount: newProjectSlotCount,
      startAtSlot: this.state.nextAvailableSlot,
      name: project.name
    }
    this.setState({
      projects: [...this.state.projects, newProject],
      nextAvailableSlot: this.state.nextAvailableSlot + newProjectSlotCount
    });
    this.recalculateSlots(newProjectSlotCount);
  }

  recalculateSlots(slotsAdded){
    this.setState({
      totalUsedSlots: this.state.totalUsedSlots += slotsAdded,
      totalAvailableSlots: this.state.maxAvailableSlots -= slotsAdded
    })
  }

  render(){
    return (
        <Row name={this.props.name}>
          <div className="button dropdown">
            <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
            </button>
            <div className="dropdown-content">
                {this.state.items.map((item, index) =>
                <Link
                  onClick={() => {this.addProject(index);}}
                  key={item.project_id}
                  projectId={item.project_id}
                  index={index}
                  projectName={item.name}
                />
              )}
            </div>
          </div>
          {this.state.projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              slotCount={project.slotCount}
              startAt={project.startAtSlot}
            />
          ))}
        </Row>
    )
  }
}

export default User;
