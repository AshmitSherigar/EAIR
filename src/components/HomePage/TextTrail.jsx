import React, { useEffect } from "react";
import gsap from "gsap";
import "./TextTrail.css"
function TextTrail() {
  useEffect(() => {
    
    const handleMouseMove = (e) => {
      gsap.to(".cursor-text", {
        x: e.clientX - 370 + "px",
        y: e.clientY - 370 + "px",
        stagger: -0.05,
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
        <div className="cursor-text">EAIR</div>
        <div className="cursor-text">EAIR</div>
        <div className="cursor-text">EAIR</div>
        <div className="cursor-text">EAIR</div>
        <div className="cursor-text">
          <span>EAIR</span>
        </div>
      </div>
    </div>
  );
}

export default TextTrail;
