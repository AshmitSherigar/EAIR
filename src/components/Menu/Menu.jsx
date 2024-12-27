import React from "react";
import "./Menu.css";
import MenuRight from "./MenuRight";
import MenuLeft from "./MenuLeft";
import transition from "../transistion";




function Menu() {
  // console.log("hello");
  return (
    
    <div className="menu">

      <MenuLeft></MenuLeft>
      <MenuRight></MenuRight>

    </div>
  );
}

export default transition(Menu);
