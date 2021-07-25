import styled from "styled-components";

export const EntreesContainer = styled.div`
  //   width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const EntreesHeading = styled.h1`
  font-size: clamp(2rem, 3vw, 4rem);
  text-align: center;
  margin: 4rem 0rem;
  text-transform: uppercase;
`;

export const EntreesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const EntreeCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 350px;
`;

export const EntreeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export const EntreeTitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const EntreeDesc = styled.p`
  margin-bottom: 0.5rem;
`;

export const EntreePrice = styled.p`
  margin-bottom: 3rem;
  font-size: 1.5rem;
`;

export const EntreeImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  &:hover {
    box-shadow: 8px 8px #e31837;
  }
`;

export const EntreeButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  background: #e31837;
  border: none;
  color: #fff;
  transition: 0.2s ease-out;
  font-family: "Kanit", sans-serif;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    color: #000;
    cursor: pointer;
  }
`;
