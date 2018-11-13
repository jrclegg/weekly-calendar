import React from "react";
import ResizableBox from './resizable'

class CreateTimeSlot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'items': [],
            id: "",
            activeIndexes: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/projects')
            .then(results => results.json())
            .then(results => this.setState({'items': results}));
    }

    render() {
        return (
            <div className="button Cell dropdown">
                <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                </button>
                <div className="dropdown-content">
                    {this.state.items.map((item, index) => <ProjectOutput onClick={() => this.setItemActive(index)} key={item.project_id} index={index} projectId={item.project_id} projectName={item.name}/>)}
                </div>
                <div>
                    {this.state.items.map((item, index) => <Project key={item.project_id} projectId={item.project_id} projectName={item.name} />)}
                </div>
            </div>
        )
    }

    setItemActive(index) {
        this.setState({ activeIndexes: [...this.state.activeIndexes, index] });
    }
}

class ProjectOutput extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <a onClick={() => this.props.onClick(this.props.index)} key={this.props.projectId}>{this.props.projectName}</a>
                </div>
            </div>
        )
    }
}

function Project(props){
    return (
        <div>
            {props.active &&
            <ResizableBox  className="box react-resizable" width={310} height={100} minConstraints={[48, 100]} maxConstraints={[1800, 100]} axis="x">
                <h2 className="title">{props.projectName ? props.projectName: ""}</h2>
            </ResizableBox>
            }
        </div>
    )
}

export default CreateTimeSlot
