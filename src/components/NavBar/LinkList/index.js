import React from 'react'
import styled from 'styled-components'

import LinkListItem from './LinkListItem'

import { spaces } from '../../../styles'
import withGutter from '../../../styles/helpers/withGutter'

const LinkList = ({ links }) => (
  <Root>
    {links.map(({ anchor, label }) => (
      <li key={anchor}>
        <LinkListItem destination={anchor} label={label} />
      </li>
    ))}
  </Root>
)

const Root = styled.ul`
  list-style-type: none;

  ${withGutter(spaces.small)}
`

export default LinkList
