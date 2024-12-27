import React, { useState } from "react";
import "./MenuRight.css";

function MenuRight() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const menuData = ["ABOUT", "STORY", "PROJECTS", "RELEASES"];
  const submenuData = [
    { col1: "Follow (EaiЯ ©)", col2: "Instagram Youtube" },
    { col1: "Listen (EaiЯ ©)", col2: "Spotify MixCloud" },
    { col1: "Get in Touch", col2: "Email" },
    {
      col1: "India 09 Street Bangalore CA 12389",
      col2: "Los Angeles 20 Street NYC CA 325465",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="menu-right">
      <div className="menu-right-center">
        <img
          src="https://images.prismic.io/arock-website-2023/ZiB1lvPdc1huKl4o_AROCK_Look_Grid_12.jpg?fm=webp&q=100&fit=crop"
          alt="Logo"
        />
        {menuData.map((elem, index) => (
          <h1
            className="NavMenu"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="block">
              {Array.from(elem).map((letter, idx) => (
                <span
                  key={idx}
                  className={`letter ${hoverIndex === index ? "play" : ""}`}
                  data-letter={letter.trim() === "" ? "\xa0" : letter}
                >
                  {letter.trim() === "" ? "\xa0" : letter}
                </span>
              ))}
            </div>
          </h1>
        ))}
      </div>
      <div className="menu-right-bottom">
        {submenuData.map((elem, index) => (
          <div key={index} className="menu-right-bottom-part">
            <h6 className={index === 2 ? "Active" : "NotActive"}>{elem.col1}</h6>
            {elem.col2 === "Email" ? (
              <h6 className="Email">
                <a href="mailto:eair@gmail.com" className="EmailLink">
                  {elem.col2}
                </a>
              </h6>
            ) : (
              <h6 className={index === 1 || index === 0 ? "Tag" : "NotTag"}>
                {elem.col2}
              </h6>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRight;
  