import React from "react";
import {
  MainButton,
  MainCard,
  MainDesc,
  MainImg,
  MainInfo,
  MainPrice,
  MainsContainer,
  MainsHeading,
  MainsWrapper,
  MainTitle,
} from "./MainsElements";

const Mains = ({ heading, data }) => {
  return (
    <MainsContainer
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-30}
      duration={500}
      id="mains"
    >
      <MainsHeading>{heading}</MainsHeading>
      <MainsWrapper>
        {data.map((main, index) => {
          return (
            <MainCard key={index}>
              <MainImg src={main.img} alt={main.alt} />
              <MainInfo>
                <MainTitle>{main.name} </MainTitle>
                <MainDesc>{main.desc} </MainDesc>
                <MainPrice>{main.price} </MainPrice>
              </MainInfo>
            </MainCard>
          );
        })}
      </MainsWrapper>
    </MainsContainer>
  );
};

export default Mains;
