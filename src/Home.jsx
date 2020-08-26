import React from "react";
import heroImg from "../src/asset/home.svg";
import Common from "./Common";

function Home() {
  return (
    <Common
      name="Grow your Business with "
      where="/service"
      imgsrc={heroImg}
      brandName="WebX"
      btnName="Get Started"
    />
  );
}

export default Home;
