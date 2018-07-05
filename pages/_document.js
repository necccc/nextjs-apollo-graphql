import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const { publicRuntimeConfig: { asset_url } } = getConfig()

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href={`${asset_url}/_next/static/style.css`} />
        </Head>
        <body className="bx--body">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}