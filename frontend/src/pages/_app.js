import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </>
  );
}

export default MyApp;