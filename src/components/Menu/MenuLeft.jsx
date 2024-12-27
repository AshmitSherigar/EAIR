import React, { useRef, useEffect } from "react";
import "./MenuLeft.css";

function MenuLeft() {
  const numberOfBlocks = 70; 
  const blocksRef = useRef([]); 
  const resetDuration = 350; 

  useEffect(() => {

    blocksRef.current.forEach((block) => {
      if (block) {
        let timeoutId;

        const handleMouseOver = () => {
          clearTimeout(timeoutId);
          block.classList.add("active");
          timeoutId = setTimeout(() => {
            block.classList.remove("active");
          }, resetDuration);
        };

        block.addEventListener("mouseover", handleMouseOver);
        return () => {
          block.removeEventListener("mouseover", handleMouseOver);
        };
      }
    });
  }, []);

  return (
    <div className="menu-left">
      <div className="image-container">
        <div className="image-box">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
            />
          </div>
          <div className="image-overlay"></div>
          <div className="image-blocks">
            {Array.from({ length: numberOfBlocks }).map((_, index) => (
              <div
                ref={(el) => (blocksRef.current[index] = el)} 
                key={index}
                className="blocks"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;
