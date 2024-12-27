import React, { useEffect, useRef } from 'react';
import './CircularText.css';

function CircularText() {
  const textRef = useRef(null);
  const radii = [150, 250, 350, 450];

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;
    const characters = text.split('');
    const degree = 360 / characters.length;

    textElement.innerHTML = characters
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * degree}deg) translate(-10px, -330px); display: inline-block;">${char}</span>`
      )
      .join('');
  }, []);

  return (
    <>
      <div className="big-circle">
        <p className="rotated" ref={textRef}>
          • Neural • Model • Data • Neural • Model • Data • Neural • Model • Data • Neural • Model • Data 
        </p>
      {radii.map((radius, index) => (
        <div
          key={index}
          style={{
            height: `${radius}px`,
            width: `${radius}px`,

          }}
          className="dot"
        ></div>
      ))}
      </div>

    </>
  );
}

export default CircularText;
