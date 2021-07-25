import styled from "styled-components";
import { GiCook } from "react-icons/gi";

export const Nav = styled.nav`
  background: transparent;
  height: 90px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  padding: 2rem 3rem;
  text-align: center;
`;

export const NavLink = styled.div`
  color: #fff;
  font-size: 3.5rem;
  // display: flex;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 450px),
  screen and (max-height: 667px)
    {
    font-size: 1.5rem;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(GiCook)`
  font-size: 2rem;
  transform: translate(-50%, 30%);
  color: #fff;
`;
