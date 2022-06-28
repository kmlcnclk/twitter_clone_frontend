import { ChakraProvider } from '@chakra-ui/react';
import '../styles/tailwind.css';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
