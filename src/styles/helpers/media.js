import { css } from 'styled-components'

import breakpoints from '../breakpoints'

const media = Object.keys(breakpoints).reduce((mediaHelper, label) => {
  mediaHelper[label] = (...args) => css`
    @media screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `

  return mediaHelper
}, {})

export default media
