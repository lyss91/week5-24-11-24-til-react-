# React 복습

## 1. 퍼블리싱

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const PublishPage = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          로고
        </a>
        <nav className="gnb">메뉴</nav>
      </header>

      <main className="main">
        <div className="slide">슬라이드</div>
        <div className="content">
          <div className="notice">공지사항</div>
          <div className="banner">배너</div>
          <div className="link">바로가기</div>
        </div>
      </main>
      <footer className="footer">
        <a href="#" className="footer-logo">
          로고
        </a>
        <p className="copyright">카피라이트</p>
        <div className="sns">SNS</div>
      </footer>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PublishPage></PublishPage>
  </StrictMode>,
);
```

## 2. 컴포넌트 분리

- 기본은 `/src/components 폴더`, `/src/pages` 폴더를 생성하자.
- 각 페이지에 무엇이 나올지 회의 -각 페이지에 공통으로 출력될 원본 컴포넌트 무엇이 필요한지 회의

### 2.1. 페이지 검토 결과

- /src/pages/IndexPage.jsx 생성

### 2.2. 컴포넌트 검토 결과

- /src/componets/header/Header.jsx 생성
- /src/componets/footer/Footer.jsx 생성

### 2.3 파일을 만들고 일단 화면에 나오고 나서 꼼꼼히 작업하세요.

## 3. css

- IndexPage.jsx 를 대상으로 복습
- 회사에서 하듯이 할게요.
- ` /src/styles/` 폴더 만들기
- ` /src/styles/pages/` 폴더 만들기
- ` /src/styles/components/` 폴더 만들기

### 3.1. IndexPage.jsx 를 위한 css

- ` /src/styles/pages/` 폴더에 `index-page.css` 만들기

## 4. module.css

- `.module.css`
- `/src/components/header/Header.jsx` 적용
- `/src/styles/header/header.module.css` 로 만들기

## 5. scss

- `/src/componets/footer/Footer.jsx` 적용
- `/src/styles/footer/footer.module.scss` 로 만들기

## 6. object css

### 6.1. inline Object.css

- 객체 리터럴
- 적극적으로 사용합니다.
- `src/components/notice/Notice.jsx`

### 6.2. Object 변수 만들고 css 적용.

- 객체 리터럴
- 적극적으로 사용합니다.
- 가능하면 ` export 로 외부 파일`에서 참조하자.
- `src/components/banner/Banner.jsx`

## 7. CSS-in-JS (Emotion)

- 가능하면 컴포넌트 생성하고, 그 컴퍼넌트에 적용하자
- `src/pages/IndexPage.jsx`
- 장점은 이름만 보아도 구분이 가능하다.
  : `<div>` 태그만으로는 내용 배치 구분이 어렵다.
  : 컴포넌트 처럼 `재활용`이 가능하다.
  : ` 공통으로 사용하는 경우` 라면 props로 조절도 가능하다.
