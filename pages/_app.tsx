import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

import CarsGallery from './carsGallery'
import { NavBar } from '../src/components/Navbar'

import "../public/scss/styles.scss";
import { Footer } from "../src/components/Footer";

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
