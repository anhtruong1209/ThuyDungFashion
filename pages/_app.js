import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  return (
    <>
      <Head>
        <title>ThuyDung Fashion</title>
        <meta name="description" content="ThuyDung Fashion - Thời trang cao cấp" />
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {!isHomePage && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 