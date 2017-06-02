import React from 'react'
import styled from 'styled-components'

import { spaces } from '../../styles'

const Section = ({ children }) => (
  <Root>
    {children}
  </Root>
)

const Root = styled.div`
  min-height: 100vh;
  padding: ${spaces.largest};
`

export default Section
