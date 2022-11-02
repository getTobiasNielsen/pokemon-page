import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-max min-h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full min-h-screen dark:bg-ugly-darkblue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
