function Box({ children, islogin }) {
  return (
    <div>
      <h1> 여기는 레이아웃 </h1>
      <div>{islogin ? children : "가입하세요"}</div>
    </div>
  );
}

export default Box;
