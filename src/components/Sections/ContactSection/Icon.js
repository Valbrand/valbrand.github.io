import React from 'react'
import styled from 'styled-components'

const Icon = ({ link }) => {
  const {
    icon,
    link: url
  } = link

  return (
    <Root
      href={url}
      target='_blank'
    >
      <IconElement
        className={`fa fa-${icon} fa-2x`}
      />
    </Root>
  )
}

const Root = styled.a`
  color: inherit;
`

const IconElement = styled.span`
  opacity: 0.6;

  cursor: pointer;

  transition: opacity 0.25s, transform 0.25s;

  &:hover {
    opacity: 1;

    transform: scale(1.1, 1.1);
  }
`

export default Icon
