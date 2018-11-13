import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectDiv = styled.div`
  position: absolute;
  background-color: #0099FF;
  top: 0;
  height: 100px;
`
const DeleteButton = styled.button`
  margin-top: 20px;
  text-align: center;
`
const SliderArrow = styled.button`
  position: absolute;
  height: 20px;
  margin-left: 97%;  
`

const Project = (props) => {
  const {
    onDragStart, onDragOver, deleteProject, name
  } = props
  const getStyles = () => ({
    left: `${props.startAt * 2.5}%`,
    width: `${props.slotCount * 2.5}%`,
    backgroundColor: props.color
  })
  return (
    <ProjectDiv style={getStyles()} onDragOver={onDragOver}>
      <p>{name}</p>
      <div>
        <DeleteButton type="button" onClick={deleteProject}>Delete</DeleteButton>
      </div>
      <div>
        <SliderArrow type="button" draggable onDragStart={onDragStart} />
      </div>
    </ProjectDiv>
  )
}
Project.propTypes = {
  startAt: PropTypes.number.isRequired,
  slotCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired
}

export default Project;
