import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

import Colors from '../styles/Colors'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const link = css`
  color: ${Colors.Blue};
  margin-top: ${Size(16)};
  grid-column: 5 / 9;
  ${Typography.Callout};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
  }
`

export default () => (
  <Link to='/' css={link}>
    サイトトップへ戻る
  </Link>
)