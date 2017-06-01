import React from 'react'
import styled from 'styled-components'

import { proportions, spaces } from '../../styles'

const NavBar = () => (
  <Root>
    <Greetings>
      <h1>
        Hello
      </h1>
      <h2>
        I am Daniel.
      </h2>
    </Greetings>

    <ul>
      <li>
        <a href="#about">About me</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  </Root>
)

const Root = styled.div`
  width: ${proportions.sidebarProportionalWidth}%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;

  background-color: lightgray;

  text-align: right;

  padding: ${spaces.largest} ${spaces.regular};
`

const Greetings = styled.div`
  margin-bottom: ${spaces.largest};
`

export default NavBar
