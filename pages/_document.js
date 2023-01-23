import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js-na1.hs-scripts.com/23795735.js'
        ></script> */}
      </body>
    </Html>
  );
}
