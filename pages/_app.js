import "../styles/styles.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <title>Partycular - Deepen your relationships</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
