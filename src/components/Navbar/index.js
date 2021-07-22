import React, { Fragment } from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToBottom();
  };
  return (
    <Fragment>
      <Nav>
        <NavLink to="/" onClick={toggleHome}>
          Lucky Start Chinese Takeaway
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
