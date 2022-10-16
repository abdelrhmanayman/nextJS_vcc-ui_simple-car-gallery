import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { AppProps } from "next/app";
import { Provider } from 'react-redux'


import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { wrapper } from "store/store";


import '../src/styles/global.styles.scss';
import '../src/styles/carsGallery.styles.scss'
import '../src/styles/footer.styles.scss'
import '../src/styles/carousel.styles.scss'
import '../src/styles/carsFilterBar.styles.scss'
import '../src/styles/learn.styles.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <NavBar />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer />
      </ThemePicker>
    </StyleProvider>
  );
}

export default MyApp;
