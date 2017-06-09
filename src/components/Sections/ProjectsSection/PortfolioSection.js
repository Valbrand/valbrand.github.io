import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spaces } from '../../../styles'
import ProjectList from './ProjectList'

const PortfolioSection = ({ sectionName, sectionData }) => (
  <Root>
    <SectionHeader>
      {sectionName}
    </SectionHeader>

    <ProjectList projects={sectionData} />
  </Root>
)

PortfolioSection.propTypes = {
  sectionName: PropTypes.string
}

const Root = styled.div`
  padding-left: ${spaces.large};
  padding-right: ${spaces.large};
`

const SectionHeader = styled.h2`
  padding-bottom: ${spaces.large};
`

export default PortfolioSection
