import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Model = ({ url, pos, logoName, size, imgSize, style }) => {
  const [boxMove, setBoxMove] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let deltaX = (mouseX * 1) / 100;
    let deltaY = (mouseY * 1) / 100;
    console.log(deltaX, deltaY);
    setBoxMove({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setBoxMove({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = document.getElementById(logoName);
    if (element) {
      element.addEventListener("mousemove", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [logoName]);

  return (
    <div
      id={logoName}
      className={`absolute h-72 w-72 flex justify-center items-center ${pos}`}
    >
      <span className={size}>
        <img
          src={url}
          alt={logoName}
          className={`${imgSize}`}
          title={logoName}
          style={{ ...style, transform: `translate(${boxMove.x}px, ${boxMove.y}px)` }}
        />
      </span>
    </div>
  );
};

export default Model;
