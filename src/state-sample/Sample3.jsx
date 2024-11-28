import { useState } from "react";

const Sample3 = () => {
  const [open, falseOpen] = useState(0);

  const popOpen = () => {
    falseOpen(1);
  };

  const popClose = () => {
    falseOpen(0);
  };

  const ButtonCSS = {
    display: open ? "block" : "none",
    position: "absolute",
    left: 0,
    top: "50px",
    width: "100%",
    height: "50vh",
    backgroundColor: "red",
  };

  return (
    <div>
      <button onClick={() => popOpen()}>보기</button>
      <div style={ButtonCSS}></div>
      <button onClick={popClose}>닫기</button>
    </div>
  );
};

export default Sample3;
