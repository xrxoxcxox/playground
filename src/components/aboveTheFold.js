import React from 'react'

import Image from './Image'

import { css } from '@emotion/core'
import Colors from '../styles/Colors'
import Size from '../styles/Size'

const root = css`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: inherit;
  position: relative;
  margin-top: ${Size(10)};
  @media (max-width: 768px) {
    margin-top: ${Size(6)};
  }
`

const keyVisual = css`
  grid-column: 5 / -1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

const title = css`
  grid-column: 1 / -1;
  position: absolute;
  bottom: ${Size(8)};
  font-size: 6.4rem;
  line-height: 8rem;
  font-weight: bold;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    position: static;
    font-size: calc(2rem + 4vw);
    line-height: 1.4;
    margin-top: ${Size(1)};
  }
  span {
    padding: 0 ${Size(3)};
    background-color: ${Colors.White};
    @media (max-width: 768px) {
      padding: 0;
      background-color: transparent;
    }
  }
`

export default ({ image, alt, children }) => (
  <div css={root}>
    <Image filename={image} alt={alt} css={keyVisual} />
    <h1 css={title}>{children}</h1>
  </div>
)
