import styled from "styled-components";
import FeaturePic from "../../images/dimmies.jpeg";

export const FeautureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
`;
export const FeatureButton = styled.div`
  font-size: 1.4rem;
`;
