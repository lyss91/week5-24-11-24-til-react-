import { useState } from "react";

const EventSample2 = () => {
  const testWord = "안녕하세요.";
  const [userWord, setUserWord] = useState("ㅇㄷ?");
  const [feedback, setFeedback] = useState("시작해요");
  const [gameTime, setGameTime] = useState("0초");
  const [start, setStart] = useState(false);

  const gameStart = () => {
    if (start === false) {
      setStart(true);
      setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
    }
  };

  const gameIng = event => {
    setUserWord(event.target.value);
    if (event.target.value === testWord) {
      setFeedback("굿 잘했음");
    } else {
      setFeedback("다시 도전해봅시다");
    }
  };
  const gameResult = event => {
    if (event.key === "Enter") {
      alert("고생했음👍");
    }
  };
  return (
    <div>
      <h1>타자 연습 하자</h1>
      <p>
        다음 문장을 작성하시오 : <b>{testWord}</b>
      </p>
      <button onClick={() => gameStart()}>연습시작</button>

      <div>{gameTime}</div>
      <div>{feedback}</div>
      <div>
        <label htmlFor="userinput">입력글</label>
        <input
          value={userWord}
          id="userinput"
          onChange={event => {
            gameIng(event);
          }}
          onKeyDown={event => gameResult(event)}
        />
      </div>
    </div>
  );
};

export default EventSample2;
