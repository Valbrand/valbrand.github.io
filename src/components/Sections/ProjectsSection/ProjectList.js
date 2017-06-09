import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectListItem from './ProjectListItem'
import withGutter from '../../../styles/helpers/withGutter'
import { spaces } from '../../../styles'

const ProjectList = ({ projects }) => (
  <Root>
    {projects.map((project, index) => (
      <ProjectListItem
        key={project.name}
        reversed={isOdd(index)}
        {...project}
      />
    ))}
  </Root>
)

ProjectList.propTypes = {
  projects: PropTypes.array
}

const Root = styled.ul`
  list-style-type: none;

  ${withGutter(spaces.regular)}
`

function isOdd (n) {
  return (n % 2) === 1
}

export default ProjectList
