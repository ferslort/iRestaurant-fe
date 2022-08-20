import Head from 'next/head';
//import Slider from "react-rangeslider";
//import "react-rangeslider/lib/index.css";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
//import useScrollPosition from "use-scroll-position";
//import "../css/skin/skin-1.css";
//import "../css/skin/skin-2.css";
import '../css/style.css';
import '../css/skin/skin-3.css';
import '../styles/switcher.css';
import '../styles/globals.css';
import '../scss/components/custom/index.scss';
import { ApolloProvider } from '@apollo/client';
import client from '../config/apolloClient';
import { Provider } from 'react-redux';
import { store } from '../store.ts';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'antd/dist/antd.css';
//...
const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Samar - React Template</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
      </Head>
      <div>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </div>

      {/* <a
        href="https://themeforest.net/cart/configure_before_adding/32950742/?license=regular;"
        target="_blank"
        className="bt-buy-now theme-btn"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a> */}
      {/* <a href="https://support.w3itexperts.com" target="_blank" className="bt-support-now theme-btn">
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a> */}
      <a href="#top">
        <button className="scroltop icon-up" type="button" style={{ display: 'inline-block' }}>
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </>
  );
}

export default MyApp;
