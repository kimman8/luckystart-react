import React, { Fragment } from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <Fragment>
      <Nav>
        <NavLink to="/">Lucky Start Chinese Takeaway</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
