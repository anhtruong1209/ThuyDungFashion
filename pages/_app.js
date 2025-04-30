import '../styles/globals.css';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  return (
    <>
      <Head>
        <title>ThuyDung Fashion</title>
        <meta name="description" content="ThuyDung Fashion - Luxury fashion house" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {!isHomePage && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 