import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';
import GlobalStyle from 'styles/GlobalStyle';

// customized App
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public Sans" />
        <title>Pay API</title>
      </Head>
      <GlobalStyle />
      {/* import css file dependencies from CDN */}
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
