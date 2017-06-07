import React from 'react'
import styled from 'styled-components'

const LinkListItem = ({ label, destination, active }) => (
  <Root active={active} href={`#${destination}`}>
    {label}
  </Root>
)

const Root = styled.a`
  text-decoration: none;
  text-transform: uppercase;

  font-weight: ${({ active }) => active ? 'bold' : 'normal'}
`

export default LinkListItem
