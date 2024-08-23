import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
