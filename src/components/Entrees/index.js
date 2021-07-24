import React from "react";
import {
  EntreeButton,
  EntreeCard,
  EntreeDesc,
  EntreeImg,
  EntreeInfo,
  EntreePrice,
  EntreesContainer,
  EntreesHeading,
  EntreesWrapper,
  EntreeTitle,
} from "./EntreesElements";

const Entrees = ({ heading, data }) => {
  return (
    <EntreesContainer
      activeClass="active"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      id="entrees"
    >
      <EntreesHeading>{heading}</EntreesHeading>
      <EntreesWrapper>
        {data.map((entree, index) => {
          return (
            <EntreeCard key={index}>
              <EntreeImg src={entree.img} alt={entree.alt} />
              <EntreeInfo>
                <EntreeTitle>{entree.name} </EntreeTitle>
                <EntreeDesc>{entree.desc} </EntreeDesc>
                <EntreePrice>{entree.price} </EntreePrice>
              </EntreeInfo>
            </EntreeCard>
          );
        })}
      </EntreesWrapper>
    </EntreesContainer>
  );
};

export default Entrees;
