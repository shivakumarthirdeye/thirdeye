import Head from 'next/head';
import Footer from './Footer';
import Header from './header/Header';

const Layout = ({
  title,
  keywords,
  description,
  children,
  showHeaderBtn,
  noFooter,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header showHeaderBtn={showHeaderBtn} />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
};

export default Layout;
