import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebuttonWrap,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Mains</SidebarLink>
        <SidebarLink to="/">Entrees</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      {/* <SidebuttonWrap> */}
      <SidebarRoute to="/">Order Now</SidebarRoute>
      {/* </SidebuttonWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
