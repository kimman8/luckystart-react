import React, { Fragment } from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Fragment>
      <Nav>
        <NavIcon onClick={toggle} className="hover:text-red-500">
          <Bars className="hover:text-yellow-500" />
        </NavIcon>
        <NavLink>LUCKY START CHINESE</NavLink>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
