import React from "react";
import { StyleProvider, ThemePicker, View } from "vcc-ui";

import CarsGallery from './carsGallery'
import { NavBar } from '../src/components/Navbar'
import { Footer } from "../src/components/Footer";


import '../src/styles/global.scss';
import '../src/styles/carsGallery.scss'
import '../src/styles/footer.scss'
import '../src/styles/carousel.scss'


function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <NavBar />
          <CarsGallery />
          <Footer />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
