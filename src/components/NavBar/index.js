import React from 'react'
import styled from 'styled-components'

import { proportions, spaces, colors } from '../../styles'
import media from '../../styles/helpers/media'

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

const Root = styled.aside`
  width: ${proportions.sidebarProportionalWidth}%;
  height: 100%;

  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;

  text-align: right;

  padding: ${spaces.largest} ${spaces.regular};

  ${media.navbar`
    width: 100%;
    bottom: 0;
    top: initial;

    height: auto;

    display: flex;
    flex-flow: column nowrap;

    background-color: ${colors.background};

    padding: ${spaces.regular};

    border-top: 1px solid ${colors.navbarBorder};

    text-align: left;
  `}
`

const Greetings = styled.div`
  margin-bottom: ${spaces.largest};

  & > h1 {
    font-size: initial;
    font-size: 2.5vw;
  }

  ${media.navbar`
    margin-bottom: ${spaces.large};

    & > h1 {
      font-size: 1.25rem;
    }
  `}
`

export default NavBar
