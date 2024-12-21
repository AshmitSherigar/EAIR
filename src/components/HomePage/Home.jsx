import React, { useState, useEffect } from "react";
import "./Home.css";
import transistion from "../transistion";
import EyeSVG from "./EyeSVG";
import Page2 from "./Page2";
import Page3 from "./Page3/Page3";
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); 
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">

      <div className="home-main" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <h1>I AM ALWAYS WATCHING YOU</h1>
        <EyeSVG scrollY={scrollY} />
      </div>
      <Page2></Page2>
      <Page3></Page3>

    </div>
  );
};

export default transistion(Home);
