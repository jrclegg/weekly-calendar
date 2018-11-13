import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.div`
  font-weight: bold;
  align-items: center;
  width: 90%;
  float: right;
  padding: 0px;
`
const Day = styled.h3`
  background: #EEE;
  border: 1px solid #FFF;
  border-width: 0 1px 1px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  padding-left: 5px;
  padding-right: 5px;
  height: 50px;
  width: 20%;
`

export const GreyCell = (props) => {
  const { children } = props
  return (
    <Day>{children}</Day>
  )
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const HeadingCells = () => (
  <Header>
    {weekdays.map(day => (
      <GreyCell key={day} day={day}>
        {day}
      </GreyCell>
    ))}
  </Header>
)

GreyCell.propTypes = {
  children: PropTypes.node.isRequired
}
