import React from "react";
import Common from "./Common";
import aboutImg from "../src/asset/about.svg";

const About = () => {
  return (
    <Common
      name="Hey, welcome to About page"
      where="/contact"
      imgsrc={aboutImg}
      brandName=" "
      btnName="Contact Now"
    />
  );
};

export default About;
