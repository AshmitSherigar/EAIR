import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import "./Marquee.css"
function Marquee() {
  const marquee_text = [
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
    "Thrive Beyond Limit",
  ];
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        gsap.to(".marquee", {
          transform: "translateX(-100%)",
          ease: "none",
          repeat: -1,
          duration: 5,
        });
        gsap.to(".marquee img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marquee", {
          transform: "translateX(100%)",
          ease: "none",
          repeat: -1,
          duration: 5,
        });
        gsap.to(".marquee img", {
          rotate: 0,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <div className="text-scroller">
        {marquee_text.map((elem, index) => (
          <div key={index} className="marquee">
            <h1>{elem}</h1>
            <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
