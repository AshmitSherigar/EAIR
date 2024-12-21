import React from "react";
import "./Page2.css"
import Marquee from "./Marquee";
import ImageBox from "./ImageBox";
import TextTrail from "./TextTrail";
const Page2 = () => {
  
  return (
    <>
    <div className="page2">
        <Marquee></Marquee>
        <ImageBox></ImageBox>
        <TextTrail></TextTrail>
    </div>
    </>
  );
};

export default Page2;
