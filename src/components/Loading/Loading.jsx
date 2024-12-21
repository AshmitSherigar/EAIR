import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loading.css";
import App from "../../App"; // Assuming your main App component is here

function Loading({ onAnimationComplete }) {
  const [showApp, setShowApp] = useState(false); // To manage App visibility
  const counter3Ref = useRef(null);

  useEffect(() => {
    console.log("Component mounted.");

    // Populate Counter 3 if it is empty
    const counter3 = counter3Ref.current;
    if (counter3 && counter3.childElementCount === 0) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j;
          counter3.appendChild(div);
        }
      }
      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);
    }

    // Animate counters
    const animate = (selector, duration, delay = 0) => {
      const element = document.querySelector(selector);
      if (!element) return;

      const numHeight = element.querySelector(".num")?.clientHeight || 0;
      const totalDistance = (element.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(element, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    animate(".counter-3", 5);
    animate(".counter-2", 5);  // Sync this duration with loader animation
    animate(".counter-1", 5, 0); // Sync with loader animation (same duration)

    // Loader animation timeline
    const animationTimeline = gsap.timeline();
    animationTimeline
      .to(".loader-1", { width: "60%", duration: 5, ease: "power2.inOut" }) // Animate to 60%
      .to(".loader-2", { width: "40%", duration: 5, delay: 0, ease: "power2.inOut" }) // Animate to 40%

    animationTimeline.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 0, // No delay here, synchronized with the loader's progress
      ease: "power2.inOut",
      onStart: () => {
        document.body.style.overflow = 'hidden'; // Disable scroll during animation
      },
      onComplete: () => {
        console.log("Final animation complete.");
        setShowApp(true); // Show App component
        onAnimationComplete(); // Trigger the callback
        document.body.style.overflow = 'auto'; // Enable scroll after animation
      },
    });
  }, [onAnimationComplete]);

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>
      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit" ref={counter3Ref}></div>
      </div>

      {/* Conditionally render App after loading animation */}
      {showApp && (
        <div className="app-container">
          <App /> {/* Main App component */}
        </div>
      )}
    </div>
  );
}

export default Loading;
