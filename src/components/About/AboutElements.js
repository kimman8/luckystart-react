import styled from "styled-components";
import AboutPic from "../../images/luckyStart.jpeg";

export const AboutContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${AboutPic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vh, 5rem);
  }

  p {
    font-size: clamp(1rem, 3vh, 2rem);
    margin-bottom: 1rem;
  }
`;
