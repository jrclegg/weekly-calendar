import React from 'react';
import ReactDOM from 'react-dom';

import TimeSlotAPI from './timeslotapi';
import CreateTimeSlot from './createtimeslot';

import './index.scss';
import './index.css';

// An example use of Resizable.


// ES6 Table Class
// Inside the Table there are structural stateless components (HeadingCell, Row and Cell)
// HeadingCell contains Cell's that have been passed 'day' props from the Cell component
// Cells that are on the left hand side of the table have been passed name props from the Cell components
// The Table is rendered

class Table extends React.Component {
    render() {
        return (
            <div>
                <div className="Table">
                    <div className="Title">
                        <p>This is a Table</p>
                    </div>
                    <HeadingCell/>
                    <Cell name="Andy"/>
                    <CreateTimeSlot/>
                    <TimeSlotAPI/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="James T"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="Jonathan"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="Armela"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="Dan"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="Chris"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="James B"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Row/>
                    <Cell name="Andris"/>
                    <CreateTimeSlot/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
            </div>
        )
    }
}


function HeadingCell() {
    return (
        <div className="Heading">
            <Cell/>
            <Cell day="Monday"/>
            <Cell day="Tuesday"/>
            <Cell day="Wednesday"/>
            <Cell day="Thursday"/>
            <Cell day="Friday"/>
        </div>
    )
}

function Row() {
    return (
        <div className="Row">
        </div>
    )
}

function Cell(props) {
    return (
        <div className="Cell">
            <h3 className="weekday">{props.day}</h3>
            <h3 className="name">{props.name}</h3>
        </div>
    )
}

// Render a React component to the DOM!

ReactDOM.render(<Table/>, document.getElementById('root'));
