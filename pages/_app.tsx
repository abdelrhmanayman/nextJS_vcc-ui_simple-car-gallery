import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { AppProps } from "next/app";


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


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <NavBar />
          <Component {...pageProps} />
        <Footer />
      </ThemePicker>
    </StyleProvider>
  );
}

export default wrapper.withRedux(MyApp);
