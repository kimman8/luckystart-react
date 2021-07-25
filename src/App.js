import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import { mainsData } from "./components/Mains/data";
import { entreesData } from "./components/Entrees/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Mains from "./components/Mains";
import Entrees from "./components/Entrees";
import { FiArrowUp } from "react-icons/fi";
import About from "./components/About";
import WrappedMap from "./components/Map";

const App = () => {
  const toggleHomeTop = () => {
    scroll.scrollToTop();
  };
  const [scrollDown, setScrollDown] = useState(false);

  window.onscroll = function (e) {
    if (window.scrollY > 500) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <About />
      <Mains heading="Mains" data={mainsData} />
      <Feature />
      <Entrees heading="Entrees" data={entreesData} />
      {/* <div className="w-screen h-screen">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeBOrS-OEtJaC59Gs91w2fmgyDFEVZZfA`}
          loadingElement={<div style={{ height: "75%" }} />}
          containerElement={<div style={{ height: "75%" }} />}
          mapElement={<div style={{ height: "75%" }} />}
        />
      </div> */}
      <Footer toggleHomeTop={toggleHomeTop} />
      {scrollDown && (
        <FiArrowUp
          className="text-white text-2xl hover:text-red-500 fixed bottom-4 right-4 animate-bounce cursor-pointer"
          onClick={toggleHomeTop}
        />
      )}
    </Router>
  );
};

export default App;
