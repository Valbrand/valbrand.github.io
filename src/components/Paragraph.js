import styled from 'styled-components'
import { spaces } from '../styles'

const Paragraph = styled.p`
  padding-bottom: ${spaces.regular};
  padding-left: ${spaces.large};
  text-indent: ${spaces.large};

  :last-child {
    padding-bottom: ${spaces.large};
  }
`

export default Paragraph
