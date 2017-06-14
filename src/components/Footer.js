import React from 'react'
import styled from 'styled-components'

import { spaces } from '../styles'

const Footer = () => {
  return (
    <Root>
      <p>
        Font Awesome by Dave Gandy - <a href='http://fontawesome.io'>http://fontawesome.io</a>
      </p>
    </Root>
  )
}

const Root = styled.footer`
  padding-left: ${spaces.large};
  padding-right: ${spaces.large};
  padding-bottom: ${spaces.regular};
  font-size: 0.8rem;
`

export default Footer
