import React from 'react'
import App from 'next/app'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default class extends App {
  render() {
    const {
      Component,
      pageProps
    } = this.props

    return (
      <>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }
}
