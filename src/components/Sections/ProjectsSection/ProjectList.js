import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ProjectListItem from './ProjectListItem'
import withGutter from '../../../styles/helpers/withGutter'
import { spaces } from '../../../styles'

const ProjectList = ({ projects }) => (
  <Root>
    {projects.map((project) => (
      <ProjectListItem
        key={project.name}
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

export default ProjectList
