import { useEffect, useState } from "react";

const EventSample3 = () => {
  const [time, setTime] = useState(0); // 타이머의 시간(초 단위)
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 여부

  // 타이머 동작 관리
  useEffect(() => {
    let timer;

    if (isRunning) {
      // 타이머 실행: 1초마다 시간 증가
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      // 타이머 중지
      clearInterval(timer);
    }

    // 정리 작업: 컴포넌트 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, [isRunning]); // isRunning 값이 변경될 때 실행

  // 시간 형식 변환 (시간:분:초)
  const formatTime = seconds => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
    // return hrs + ":" + mins + ":" + secs;
  };

  // 타이머 시작
  const handleStart = () => {
    setIsRunning(true);
  };

  // 타이머 멈춤
  const handleStop = () => {
    setIsRunning(false);
  };

  // 타이머 리셋
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>타이머</h1>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        {formatTime(time)} {/* 시간:분:초 형식 출력 */}
      </div>
      <button
        onClick={handleStart}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Start
      </button>
      <button
        onClick={handleStop}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Stop
      </button>
      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default EventSample3;
