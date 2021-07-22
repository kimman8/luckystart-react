import React, { useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const scrollToElement = () => {
    scroll.scrollTo("myScrollToElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "mains",
      offset: 50,
    });
    console.log("hey scrollin");
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          to="mains"
          // smooth={true}
          // duration={500}
          // spy={true}
          // exact="true"
          // offset={-80}
          // containerId="mains"
          onClick={scrollToElement}
        >
          Mains
        </SidebarLink>
        <SidebarLink
          to="entrees"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Entrees
        </SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap onClick={toggle}>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
