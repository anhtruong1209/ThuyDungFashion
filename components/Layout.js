import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children, title = 'ThuyDung Fashion' }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="ThuyDung Thời trang cao cấp" />
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={`flex-grow ${isHomePage ? '' : 'pt-24'}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
} 