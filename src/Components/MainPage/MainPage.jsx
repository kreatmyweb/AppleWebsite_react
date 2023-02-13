import React from "react";
import Alert from "./Alert/Alert";
import SectionFive from "./SectionFive/SectionFive";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionSix from "./SectionSix/SectionSix";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import Youtube from "./YouTube/YouTube";

function MainPage() {
  return (
    <div>
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Youtube />
    </div>
  );
}

export default MainPage;
