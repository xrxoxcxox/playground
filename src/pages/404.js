import React from 'react'

import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import { css } from '@emotion/core'
import GlobalStyle from '../styles/GlobalStyle'
import Size from '../styles/Size'
import Typography from '../styles/Typography'

const container = css`
  grid-column: 1 / -1;
`

const title = css`
  ${Typography.Title};
  font-weight: 900;
  margin-top: ${Size(30)};
`

const body = css`
  ${Typography.Body1};
  margin-top: ${Size(6)};
`

const button = css`
  margin-top: ${Size(12)};
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: calc(100% - ${Size(8)});
    margin-right: auto;
    margin-left: auto;
  }
`

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Seo title='404: Not found' />
    <Layout>
      <div css={container}>
        <Header />
        <h1 css={title}>
          お探しのページは
          <br />
          見つかりませんでした
        </h1>
        <p css={body}>
          ページが移動、または削除されてしまったかもしれません。
          <br />
          再度URLをご確認ください。
        </p>
        <Button to='/' override={button}>
          サイトトップへ戻る
        </Button>
      </div>
      <Footer />
    </Layout>
  </>
)

export default NotFoundPage
