import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spaces } from '../../styles'

const Section = ({ title, children }) => (
  <Root>
    {title == null ? null : (
      <Title>
        {title}
      </Title>
    )}

    <Content>
      {children}
    </Content>
  </Root>
)

Section.propTypes = {
  title: PropTypes.string.isRequired
}

const Root = styled.div`
  padding-bottom: ${spaces.largest};
`

const Title = styled.h1`
  flex: 0 0 auto;

  padding-left: ${spaces.large};
  padding-bottom: ${spaces.large};
`

const Content = styled.div`
  flex: 1 0 0;
`

export default Section
