import React from 'react';
import ReactDOM from 'react-dom';

import TimeSlotAPI from './timeslotapi';
import CreateTimeSlot from './createtimeslot';

import './index.scss';
//import './index.css';


// ES6 Table stateless component
// Inside the Table there are structural stateless components (HeadingCell, Row and Cell)
// HeadingCell contains Cell's that have been passed 'day' props from the Cell component
// Cells that are on the left hand side of the table have been passed name props from the Cell components
// The Table is rendered

const weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ]

const Cell = (props) => (
  <div className="Cell">
    <h3 className="weekday">{props.day}</h3>
    <h3 className="name">{props.name}</h3>
  </div>
)

const HeadingCells = () => (
  <div className="Heading">
    <Cell />
    {weekdays.map(day => (
      <Cell key={day} day={day} />
    ))}
  </div>
)

const Row = (props) => (
  <div className="Row">
    <Cell name={props.name} />
    <CreateTimeSlot />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </div>
)

const Table = () => {
  return (
    <div>
      <div className="Table">
        <div className="Title">
          <p>This is a Table</p>
        </div>
        <HeadingCells />
        <Row name="Andy" />
        <CreateTimeSlot />
        <TimeSlotAPI />
        <Cell />
        <Cell />
        <Cell />
        <Row />
        <Row name="James T" />
        <Row name="Jonathan" />
        <Row name="Armela" />
        <Row name="Dan" />
        <Row name="Chris" />
        <Row name="James B" />
        <Row name="Andris" />
      </div>
    </div>
  )
}

export default Table;

// Render a React component to the DOM!
ReactDOM.render(<Table/>, document.getElementById('root'));
