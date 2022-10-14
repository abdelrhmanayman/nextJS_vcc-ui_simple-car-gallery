import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { AppProps } from "next/app";


import { NavBar } from '../src/components/Navbar'
import { Footer } from "../src/components/Footer";


import '../src/styles/global.scss';
import '../src/styles/carsGallery.scss'
import '../src/styles/footer.scss'
import '../src/styles/carousel.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default MyApp;
