import React from "react";
import { AboutContainer, AboutTextContainer } from "./AboutElements";

const About = () => {
  return (
    <AboutContainer>
      <AboutTextContainer>
        <h1>The Lucky Start story...</h1>
        <p>
          Tucked away in the southern suburbs of Melbourne lies a hidden gem and
          an absolute must have for any serious Chinese food lover. Lucky Start,
          a historic and iconic Chinese takeout with a colourful past and a
          great story has been proudly managed by its owners for over 27 years.
        </p>
        <h2>
          “We only use top quality ingredients, we keep it simple and keep it
          fresh.”
        </h2>
        <p>
          There’s something truly special about restaurants like Lucky Start.
          Whether it’s the owner's Chinese heritage, the friendly team spirit or
          the unwavering attention to detail, one thing’s for sure, when it
          comes to good Chinese food you can’t look past Lucky Start!
        </p>
      </AboutTextContainer>
      <AboutTextContainer></AboutTextContainer>
    </AboutContainer>
  );
};

export default About;
