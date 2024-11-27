import { useState } from "react";
// 버튼 클릭하면 팝업창 보이기
// 팝업창의 닫기 버튼 클릭하면 창닫기
const Sample3 = () => {
  const [open, setOpen] = useState(false);
  const ButtonCSS = {
    display: open ? "block" : "none",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "5vh",
  };
  const popOpen = () => {
    setOpen(true);
  };
  const popClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={() => popOpen()}>보기</button>
      <div style={ButtonCSS}>
        <button onClick={popClose}>닫기</button>
      </div>
    </div>
  );
};

export default Sample3;
