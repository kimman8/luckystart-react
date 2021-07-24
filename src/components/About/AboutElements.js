import styled from "styled-components";
import AboutPic from "../../images/luckyStart.jpeg";

export const AboutContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${AboutPic});
  height: 100vh;
  max-height: 1000px;
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  color: #fff;
  // text-align: center;
  padding: 0 1rem;
`;

export const AboutTextContainer = styled.div`
  width: 500px;

  h1 {
    font-size: clamp(2rem, 3.5vh, 4rem);
  }
  h2 {
    font-size: clamp(1rem, 2.5vh, 3rem);
    margin-bottom: 1rem;
    border-left: 8px solid #e31837;
    padding-left: 15px;
  }
  p {
    font-size: clamp(0.5rem, 1.5vh, 1rem);
    margin-bottom: 1rem;
  }
`;
