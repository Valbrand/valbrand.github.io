import React from 'react'
import styled from 'styled-components'

import { spaces } from '../../../styles'

const ArticleListItem = ({ article: { title, description, url } }) => (
  <Root>
    <h1>
      <a href={url}>
        {title}
      </a>
    </h1>

    <p>
      {description}
    </p>
  </Root>
)

const Root = styled.div`
  padding-left: ${spaces.large};
  padding-right: ${spaces.large};
`

export default ArticleListItem
