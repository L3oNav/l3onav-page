import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>L3oNav &#916;</title>
          <meta name="theme-color" content="#000000" />
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/particles.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
