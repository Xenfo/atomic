import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';

import SEO from '../../next-seo.config';
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Atomics - A chat app for you</title>
      </Head>
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
        <div className="app">
          <main>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
