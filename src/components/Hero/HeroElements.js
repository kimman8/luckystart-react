import styled from "styled-components";
import { FiArrowDown } from "react-icons/fi";
import ImgBg from "../../images/fried-rice.jpeg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  // height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw-1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  color: #fff;
  padding: 0 1rem;
  width: 500px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const HeroCall = styled.div`
  font-size: clamp(1.5rem, 5vh, 3.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  display: flex;
`;
export const HeroH1 = styled.h1``;
export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  font-family: "Kanit", sans-serif;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vh, 3rem);
  margin-bottom: 0.5rem;
`;

export const HeroPsm = styled.p`
  font-size: clamp(1.5rem, 1vh, 3rem);
  margin-bottom: 2rem;
  @media screen and (max-height: 667px) {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const HeroArrow = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  // margin-left: auto;
  // margin-right: auto;
  margin: 0 auto;
  width: 100px;
`;

export const DownArrow = styled(FiArrowDown)`
  font-size: 1.5rem;
  cursor: pointer;
`;
