import React from 'react'

import Section from '../Section'
import portfolio from '../../../data/portfolio.json'
import PortfolioSection from './PortfolioSection'

const ProjectsSection = ({ anchor }) => (
  <Section title='My projects' id={anchor}>
    {Object.keys(portfolio).map((portfolioSection) => (
      <PortfolioSection
        key={portfolioSection}
        sectionName={portfolioSection}
        sectionData={portfolio[portfolioSection]}
      />
    ))}
  </Section>
)

export default ProjectsSection
