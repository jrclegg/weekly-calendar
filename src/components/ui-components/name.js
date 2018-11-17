import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledName = styled.h1`
  text-align: center;
  padding-top: 70px;
  font-size: 20px;
  margin-top: -50px;
`;

const StyledUserDiv = styled.div`
  width: 10%;
  height: 100%;
  display: inline-block;
`

const Name = (props) => {
  const { name } = props
  return (
    <StyledUserDiv>
      {name && <StyledName>{name}</StyledName>}
    </StyledUserDiv>
  )
}
Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name
