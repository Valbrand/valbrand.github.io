import React from 'react'
import styled from 'styled-components'

import LinkListItem from './LinkListItem'

import { spaces } from '../../../styles'
import withGutter from '../../../styles/helpers/withGutter'
import media from '../../../styles/helpers/media'

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

  ${media.navbar`
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;

    ${withGutter(0)}
  `}
`

export default LinkList
