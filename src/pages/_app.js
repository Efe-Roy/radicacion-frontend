import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import "react-toastify/dist/ReactToastify.css";

import { SSRProvider } from '@react-aria/ssr';

// Boostrap Css
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
