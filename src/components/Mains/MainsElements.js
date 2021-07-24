import styled from "styled-components";

export const MainsContainer = styled.div`
  //   width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const MainsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
`;

export const MainsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MainCard = styled.div`
  margin: 0 2.5rem;
  line-height: 1.5;
  width: 300px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export const MainTitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
`;

export const MainDesc = styled.p`
  margin-bottom: 1rem;
`;

export const MainPrice = styled.p`
  font-size: 1.5rem;
`;

export const MainImg = styled.img`
  height: 350px;
  min-width: 350px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  &:hover {
    box-shadow: 8px 8px #e31837;
  }
`;

export const MainButton = styled.button`
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
