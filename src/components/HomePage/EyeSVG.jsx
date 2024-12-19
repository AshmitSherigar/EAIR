import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./EyeSVG.css"
function EyeSVG() {
  const svgRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;

    if (!svg) return;

    const getMousePosition = (event) => {
      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    };

    const createEye = (outerRef, innerRef) => {
      const outer = outerRef.current;
      const inner = innerRef.current;

      if (!outer || !inner) return;

      const bbox = outer.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      const maxDistance = bbox.width / 2 - inner.getBBox().width / 2;

      return (mouseX, mouseY) => {
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const angle = Math.atan2(dy, dx);
        const limitedDistance = Math.min(distance, maxDistance);

        const newX = centerX + Math.cos(angle) * limitedDistance;
        const newY = centerY + Math.sin(angle) * limitedDistance;

        gsap.to(inner, {
          cx: newX,
          cy: newY,
          duration: 0.1,
        });
      };
    };

    const leftEye = createEye(leftEyeRef, leftPupilRef);
    const rightEye = createEye(rightEyeRef, rightPupilRef);

    const onMouseMove = (event) => {
      const { x, y } = getMousePosition(event);
      if (leftEye) leftEye(x, y);
      if (rightEye) rightEye(x, y);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <svg id="svg" ref={svgRef} viewBox="0 0 1000 1000">
        <g id="left-eye" ref={leftEyeRef}>
          <circle
            className="eye-outer"
            cx="400"
            cy="500"
            r="125"
            stroke="#0f0f0f"
            strokeWidth={2}
            fill="#fff"
          />
          <circle
            className="eye-inner"
            cx="400"
            cy="500"
            r="75"
            stroke="#0f0f0f"
            strokeWidth={2}
            fill="#000"
            ref={leftPupilRef}
          />
        </g>
        <g id="right-eye" ref={rightEyeRef}>
          <circle
            className="eye-outer"
            cx="660"
            cy="500"
            r="125"
            stroke="#0f0f0f"
            strokeWidth={2}
            fill="#fff"
          />
          <circle
            className="eye-inner"
            cx="610"
            cy="500"
            r="75"
            stroke="#0f0f0f"
            strokeWidth={2}
            fill="#000"
            ref={rightPupilRef}
          />
        </g>
      </svg>
    </>
  );
}

export default EyeSVG;
