import React from "react";


class TimeSlotAPI extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'items': [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/calendar')
            .then(results => results.json())
            .then(results => this.setState({'items': results}));
    }
    render(){
        const listStart = this.state.items.map(function(item, index){
            return item.start;

        });
        const listSize = this.state.items.map(function(item, index){
            return item.size;
        });
        const projectName = this.state.items.map(function(item, index){
            return item.name;
        });

        return (
            <div>
                <Andy listStart={listStart} listSize={listSize} projectName={projectName}/>
                <JamesT listStart={listStart} listSize={listSize} projectName={projectName}/>
                <Jonathan listStart={listStart} listSize={listSize} projectName={projectName}/>
                <Armela listStart={listStart} listSize={listSize} projectName={projectName}/>
                <Dan listStart={listStart} listSize={listSize} projectName={projectName}/>
                <Chris listStart={listStart} listSize={listSize} projectName={projectName}/>
                <JamesB listStart={listStart} listSize={listSize} projectName={projectName}/>
                <Andris listStart={listStart} listSize={listSize} projectName={projectName}/>
            </div>
        )
    }
}

function Andy(props){
    return (
        <div>
            <svg className="svg">
                <rect className="rectangle" width={props.listSize[0]} height="100" x={props.listStart[0]} y="20"/>
                <text className="slotText" x="250" y="80">{props.projectName[0]}</text>
                <rect className="rectangle" width={props.listSize[1]} height="100" x={props.listStart[1]} y="20" />
                <text className="slotText" x="600" y="80">{props.projectName[1]}</text>
                <rect className="rectangle" width={props.listSize[2]} height="100" x={props.listStart[2]} y="20" />
                <text className="slotText" x="1100" y="80">{props.projectName[2]}</text>
                <rect className="rectangle" width={props.listSize[3]} height="100" x={props.listStart[3]} y="20" />
                <text className="slotText" x="1350" y="80">{props.projectName[3]}</text>
                <rect className="rectangle" width={props.listSize[4]} height="100" x={props.listStart[4]} y="20" />
                <text className="slotText" x="1820" y="80">{props.projectName[4]}</text>
            </svg>
        </div>
    )
}

function JamesT(props){
    return (
        <div className="second">
            <svg className="svg JamesT">
                <rect className="rectangle" width={props.listSize[5]} height="100" x={props.listStart[5]} y="20" />
                <text className="slotText" x="1010" y="80">{props.projectName[5]}</text>
            </svg>
        </div>
    )
}

function Jonathan(props) {
    return (
        <svg className="svg Jonathan">
            <rect className="rectangle" width={props.listSize[6]} height="100" x={props.listStart[6]} y="20" />
            <text className="slotText" x="450" y="80">{props.projectName[6]}</text>
            <rect className="rectangle" width={props.listSize[7]} height="100" x={props.listStart[7]} y="20" />
            <text className="slotText" x="1890" y="80">{props.projectName[7]}</text>
        </svg>
    )
}

function Armela(props) {
    return (
        <svg className="svg Armela">
            <rect className="rectangle" width={props.listSize[8]} height="100" x={props.listStart[8]} y="20" />
            <text className="slotText" x="150" y="80">{props.projectName[8]}</text>
            <rect className="rectangle" width={props.listSize[9]} height="100" x={props.listStart[9]} y="20" />
            <text className="slotText" x="800" y="80">{props.projectName[9]}</text>
        </svg>
    )
}

function Dan(props) {
    return (
        <svg className="svg Dan">
            <rect className="rectangle" width={props.listSize[10]} height="100" x={props.listStart[10]} y="20" />
            <text className="slotText" x="1500" y="80">{props.projectName[10]}</text>
        </svg>
    )
}

function Chris(props){
    return (
        <svg className="svg Chris">
            <rect className="rectangle" width={props.listSize[11]} height="100" x={props.listStart[11]} y="20" />
            <text className="slotText" x="500" y="80">{props.projectName[11]}</text>
        </svg>
    )
}

function JamesB(props){
    return (
        <svg className="svg JamesB">
            <rect className="rectangle" width={props.listSize[12]} height="100" x={props.listStart[12]} y="20" />
            <text className="slotText" x="1000" y="80">{props.projectName[12]}</text>
        </svg>
    )
}

function Andris(props){
    return (
        <svg className="svg Andris">
            <rect className="rectangle" width={props.listSize[13]} height="100" x={props.listStart[13]} y="20" />
            <text className="slotText" x="350" y="80">{props.projectName[13]}</text>
            <rect className="rectangle" width={props.listSize[14]} height="100" x={props.listStart[14]} y="20" />
            <text className="slotText" x="1650" y="80">{props.projectName[14]}</text>
        </svg>
    )
}



export default TimeSlotAPI;