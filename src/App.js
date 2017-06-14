import React from 'react'
import styled from 'styled-components'

import { proportions, spaces } from './styles'
import media from './styles/helpers/media'
import sectionsData from './data/sections.json'
import NavBar from './components/NavBar'
import sections from './components/Sections'
import Footer from './components/Footer'

const App = () => (
  <div>
    <NavBar links={sectionsData} />

    <Content>
      <main>
        {sectionsData.map(({ anchor, component }) => {
          const Section = sections[component]

          return <Section key={anchor} />
        })}
      </main>

      <Footer />
    </Content>
  </div>
)

const Content = styled.div`
  width: ${proportions.contentProportionalWidth}%;
  min-height: 100vh;

  position: absolute;
  right: 0;
  top: 0;

  padding-top: ${spaces.largest};

  ${media.navbar`
    width: 100%;
  `}
`

export default App
