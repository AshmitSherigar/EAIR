import React, { useEffect } from "react";
import gsap from "gsap";
import "./TextTrail.css"
function TextTrail() {
  useEffect(() => {
    
    const handleMouseMove = (e) => {
      
      gsap.to(".cursor-text", {
        x: e.clientX - 100 + "px",
        y: e.clientY - 150 + "px",
        stagger: -0.03,
      });
      console.log(e);
      
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {

      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="trailBlock">
      <div className="cursor">
        <div className="cursor-text">EAIЯ</div>
        <div className="cursor-text">EAIЯ</div>
        <div className="cursor-text">EAIЯ</div>
        <div className="cursor-text">EAIЯ</div>
        <div className="cursor-text">
          <span>EAIЯ</span>
        </div>
      </div>
    </div>
  );
}

export default TextTrail;
