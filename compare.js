import React, { PureComponent } from 'react';
import {slotLength, Project, Row, Link} from './grid.js'

class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      nextAvailableSlot: 0,
      items: [],
      id: "",
      activeIndexes: []
     }
  }


componentDidMount(){
      fetch('http://localhost:8080/projects')
          .then(results => results.json())
          .then(results => this.setState({'items': results}));
}

  addProject = (data) => {
    const newProject = {
      name: data.name,
      slotCount: data.slotCount,
      startAtSlot: this.state.nextAvailableSlot
    }
    this.setState({
      projects: [...this.state.projects, newProject],
      nextAvailableSlot: this.state.nextAvailableSlot + data.slotCount
    });
  }

  setItemActive(index) {
      this.setState({ activeIndexes: [...this.state.activeIndexes, index] });
  }

  render(){
    return (
        <Row name={this.props.name}>
          <div className="button Cell dropdown">
            <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
            </button>
            <div className="dropdown-content">
                {this.state.items.map((item, index) =>
                <Link
                  onClick={() => {this.addProject(slotLength);this.setItemActive(index);}}
                  key={item.project_id}
                  projectId={item.project_id}
                  index={index}
                  projectName={item.name}
                />
                )}
            </div>
            <div>
                {this.state.projects.map(project => (
                    <div>
                      {this.state.items.map((item, index) =>
                      <Project
                        active={this.state.activeIndexes.indexOf(index)!== -1}
                        key={project.name}
                        name={project.name}
                        projectName={item.name}
                        projectId={item.project_id}
                        slotCount={project.slotCount}
                        startAt={project.startAtSlot}
                      />
                      )}
                    </div>
                ))}
            </div>
          </div>
        </Row>
    )
  }
}

export default User;
