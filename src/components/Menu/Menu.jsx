import React, { useEffect, useRef } from "react";
import "./Menu.css";
import MenuRight from "./MenuRight";
import MenuLeft from "./MenuLeft";
import gsap from "gsap";
import { useNavigate } from 'react-router-dom'

// import { useGSAP } from "@gsap/react";



function Menu(props) {
  // console.log(props);
  const navigate = useNavigate()


  const menuRef = useRef(null);
  useEffect(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
      });
    } else {
      gsap.to(menuRef.current, {
        top: "-100%",
        onComplete:()=> navigate("/"),
      });
    }
  }, [props.menuOpen , navigate]);
  return (
    <div ref={menuRef} className="menu">
      <MenuLeft></MenuLeft>
      <MenuRight menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}></MenuRight>
    </div>
  );
}

export default Menu;
