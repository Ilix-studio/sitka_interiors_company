import React from "react";

import HeroSection from "./mainComponents/HeroSection";
import { OurServices } from "./mainComponents/OurServices";
import { OurDesigns } from "./mainComponents/OurDesigns";
import About from "./mainComponents/About";
import Contact from "./mainComponents/Contact";
import Footer from "./mainComponents/Footer";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurDesigns />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
