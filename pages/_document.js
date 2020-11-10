import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100 text-gray-900 duration-300 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument