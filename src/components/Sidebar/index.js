import React, { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, scrollToElement }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link
          to="mains"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={scrollToElement}
        >
          <SidebarLink>Mains</SidebarLink>
        </Link>
        <Link
          to="entrees"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={scrollToElement}
        >
          <SidebarLink>Entrees</SidebarLink>
        </Link>
        {/* <SidebarLink to="/">Full Menu</SidebarLink> */}
      </SidebarMenu>
      {/* <SideBtnWrap onClick={toggle}>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
