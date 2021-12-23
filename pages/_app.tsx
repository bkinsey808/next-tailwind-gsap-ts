import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // imported like this because GSAP (or its plugins) requires body dom element to be present
    // see https://greensock.com/forums/topic/22491-gsap3-target-object-not-found/
    import('../helpers/gsap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
