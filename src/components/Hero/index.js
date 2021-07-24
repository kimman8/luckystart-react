import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
  HeroArrow,
  DownArrow,
  HeroCall,
  HeroPsm,
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
    console.log("closin");
  };
  const scrollToElement = () => {
    scroll.scrollTo("myScrollToElement", {
      containerId: "mains",
    });
    closeSidebar();
    console.log("scrolling to element");
  };
  return (
    <HeroContainer onKeyDown={handleKeyDown} tabIndex="0">
      <Navbar toggle={toggle} />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        closeSidebar={closeSidebar}
        scrollToElement={scrollToElement}
      />
      <HeroContent onClick={closeSidebar}>
        <HeroItems>
          <HeroCall>
            <AiFillPhone />
            <HeroH1>9782 6668</HeroH1>
          </HeroCall>
          <HeroP>OPEN 7 DAYS A WEEK</HeroP>
          <HeroPsm>CARRUM DOWNS SHOPPING CENTRE IN THE FOOD COURT</HeroPsm>
          <HeroBtn>MENU</HeroBtn>
        </HeroItems>
        <Link
          to="mains"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={scrollToElement}
        >
          <HeroArrow
            className="text-white animate-bounce hover:text-red-500"
            to="mains"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={scrollToElement}
          >
            <DownArrow />
          </HeroArrow>
        </Link>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
