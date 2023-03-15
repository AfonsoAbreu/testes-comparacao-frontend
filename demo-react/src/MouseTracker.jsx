import { useState, useEffect } from "react";

export default function MouseTracker () {
  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);
  const [ numberOfClicks, setNumberOfClicks ] = useState(0);

  function handleMouseMove({ offsetX, offsetY }) {
    setMouseX(offsetX);
    setMouseY(offsetY);
  }

  function handleClick() {
    setNumberOfClicks(numberOfClicks + 1);
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
  });

  return (
    <>
      <p>Mouse position (x/y): {mouseX}/{mouseY}</p>
      <p>Number of clicks: {numberOfClicks}</p>
    </>
  );
}