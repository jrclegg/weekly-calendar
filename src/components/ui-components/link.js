import React from 'react';
import PropTypes from 'prop-types'

const Link = (props) => {
  const {
    addProject, projectId, projectName
  } = props
  return (
    <div>
      <a role="presentation" onClick={addProject} key={projectId}>{projectName}</a>
    </div>
  )
}
Link.propTypes = {
  // onClick: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  projectId: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
}

export default Link
