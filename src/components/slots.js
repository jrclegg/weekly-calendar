import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SlotDiv = styled.div`
  height: 100%;
`

const InnerSlotDiv = styled.div`
  border: 1px solid #FFF;
  border-width: 0 1px 1px 0;
  background-color: #CCE9E9;
  cursor: pointer;
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  height: 100%;
  width: 2.5%;
  float: left;
  &:hover{
    background-color: #FFFFFF;
  }
  &:nth-child(4n){
    border-right-color: ${props => props.theme.colors.grey4};
    border-right-style: dotted;
  }
  &:nth-child(8n){
    border-right-color: ${props => props.theme.colors.grey4};
    border-right-style: solid;
  }
`

const Slots = (props) => {
  const { onDragOver, onDrop, onButtonClick } = props
  return (
    <SlotDiv>
      {Array.from(Array(40).keys()).map((number, index) => (
        <InnerSlotDiv
          role="presentation"
          onDragOver={event => onDragOver(event, index)}
          onDrop={event => onDrop(event, index)}
          index={index}
          key={number}
          onClick={event => onButtonClick(event, index)}
        >
          {number + 1}
        </InnerSlotDiv>
      ))}
    </SlotDiv>
  )
}

Slots.propTypes = {
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Slots
