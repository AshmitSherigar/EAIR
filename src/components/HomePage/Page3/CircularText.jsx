import React, { useEffect, useRef } from 'react';
import './CircularText.css';

function CircularText() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;
    const characters = text.split('');
    const degree = 360 / characters.length;

    textElement.innerHTML = characters
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * degree}deg) translate(0, -350px); display: inline-block;">${char}</span>`
      )
      .join('');
  }, []);

  return (
    <div className="big-circle">
      <p className="rotated" ref={textRef}>
        • Neural • Model • Data • Neural • Model • Data • Neural • Model • Data • Neural • Model • Data 
      </p>
    </div>
  );
}

export default CircularText;
