import Document, { Html, Head, Main, NextScript } from 'next/document';
import init from './../services/twitch_bot';



class CustomDocument extends Document {
  return = (): JSX.Element => (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
