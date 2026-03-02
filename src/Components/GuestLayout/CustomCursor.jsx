import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleHover = (e) => {
      if (e.target.closest("a, button, .interactive, [data-cursor]")) {
        cursor.classList.add("cursor-hover");
        cursor.textContent = "👆";
      } else {
        cursor.classList.remove("cursor-hover");
        cursor.textContent = "";
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);
  

  return <>
  <div ref={cursorRef} className="custom-cursor-dot" />
  <style>
    {`
    * {
  cursor: none;
}

.custom-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  mix-blend-mode: difference;
  transition:height 0.3s,width 0.3s;
}

.cursor-hover {
  width: 40px;
  height: 40px;
  mix-blend-mode: normal;
  transition:height 0.3s,width 0.3s;
}
    `}
  </style>
  </>;
};

export default CustomCursor;