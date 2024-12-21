import React from "react";
import "./ImageBox.css";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
// import { IconContext } from "react-icons";

function ImageBox() {
  const data = [
    {
      Name: "Projects-",
      Desc: "Asimo - The Superficial Robot",
      imageurl:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      Name: "Upcoming-",
      Desc: "Cool Projects that are getting cooked inside!",
      imageurl:
        "https://images.unsplash.com/photo-1730829807423-83b045bd6cfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="textOfimages">
        <h3>Elements</h3>
        <h1>
            See the Highlights of this Website...
        </h1>
      </div>
      <div className="image-boxes">
        {data.map((elem, index) => (
          <div className="boxes" key={index}>
            <img src={elem.imageurl} alt="Coding" />
            <div className="imageLayer">
              <div className="layer1">
                <h4>{elem.Name}</h4>
                <h5>{elem.Desc}</h5>
              </div>
              <div className="layer2">
                <FaLocationArrow className="icons" />
                <FaRegBookmark className="icons" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageBox;
