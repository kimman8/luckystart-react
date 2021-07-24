import React, { Fragment } from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Fragment>
      <Nav>
        <NavLink>Lucky Start Chinese Takeaway</NavLink>
        <NavIcon onClick={toggle} className="hover:text-red-500">
          <p>Menu</p>
          <Bars className="hover:text-yellow-500" />
        </NavIcon>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
