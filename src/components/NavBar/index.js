import React from 'react'
import styled from 'styled-components'

import { proportions, spaces } from '../../styles'

import LinkList from './LinkList'

const NavBar = ({ links }) => (
  <Root>
    <Greetings>
      <h1>
        dvalbrand.com
      </h1>
    </Greetings>

    <LinkList links={links} />
  </Root>
)

const Root = styled.div`
  width: ${proportions.sidebarProportionalWidth}%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;

  text-align: right;

  padding: ${spaces.largest} ${spaces.regular};
`

const Greetings = styled.div`
  margin-bottom: ${spaces.largest};
`

export default NavBar
