import React from 'react'
import styled from 'styled-components'

import { proportions } from './styles'
import NavBar from './components/NavBar'

const App = () => (
  <div>
    <NavBar />

    <Content>
      <Section>
        <h1>Secao1</h1>
      </Section>
      <Section>
        <h1>Secao 2</h1>
      </Section>
      <Section>
        <h1>Secao 3</h1>
      </Section>
    </Content>
  </div>
)

const Content = styled.div`
  width: ${proportions.contentProportionalWidth}%;
  min-height: 100vh;

  position: absolute;
  right: 0;
  top: 0;

  background-color: cyan;
`

const Section = styled.div`
  min-height: 100vh;
`

export default App
