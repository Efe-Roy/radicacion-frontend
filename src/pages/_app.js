import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import "react-toastify/dist/ReactToastify.css";

// Boostrap Css
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
