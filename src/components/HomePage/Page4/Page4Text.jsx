import React from "react";
import "./Page4Text.css";
function Page4Text() {
    const datatext = [
        {heading:"Website Development",para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserun amet similique corporis, laudantium eaque provident modi. Sapiente labore odit placeat." , header2:"Download Now" , Button:"Download"},
        {heading:"Website ShowCase",para:"Lorem ipsum, dolor sit amet  elit. Deserun amet similique  labore odit placeat." , header2:"Upload Now" , Button:"Upload"}
    ]
  return (
    <>
      <div className="grid-text">
{        datatext.map((elem,index) => (
        <div className="rectangle">
          <h1>{elem.heading}</h1>
          <p>
            {elem.para}
          </p>
          <div className="rectangle-inner">
            <h3>{elem.header2}</h3>
            <button>{elem.Button}</button>
          </div>
        </div>
        ))}

      </div>
    </>
  );
}

export default Page4Text;
