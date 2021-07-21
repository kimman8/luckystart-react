import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) {
      toggle();
    }
  };
  const closeSidebar = () => {
    if (isOpen) {
      toggle();
    }
  };
  return (
    <HeroContainer onKeyDown={handleKeyDown} tabIndex="0">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent onClick={closeSidebar}>
        <HeroItems>
          <HeroH1>Greatest Chinese Food Ever!</HeroH1>
          <HeroP>Ready in 60 seconds!</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
