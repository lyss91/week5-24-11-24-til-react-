# react-router-dom

- 리액트에는 http 경로를 이용한 화면이동이 없습니다.
- 통상 http 경로를 `라우터` 라고 합니다.
- `라우터` 를 사용하려면 `react-router-dom` 을 사용해야합니다.

## 1. 참고사항

- 링크

```html
<a href="라우터">이동</a>
```

- form 의 action

```html
<form action="라우터">...</form>
```

## 2. URI 의 구성

- `http://localhost:3000/todo/login?id=hong&pass=123`

### 2.1. Protocol (네트워킹을 위한 약속)

- `http://`

```
HTTP (HyperText Transfer Protocol)
 : 웹 브라우저와 서버 간의 데이터 전송.

HTTPS (HTTP Secure)
 : HTTP에 보안(SSL/TLS)을 추가한 프로토콜.

FTP (File Transfer Protocol)
 : 파일 전송에 사용.

SMTP (Simple Mail Transfer Protocol)
 : 이메일 전송.

IMAP (Internet Message Access Protocol)
 : 이메일 수신(서버에서 관리).

POP3 (Post Office Protocol 3)
 : 이메일 수신(다운로드 후 로컬 관리).

DNS (Domain Name System)
 : 도메인 이름을 IP 주소로 변환.

DHCP (Dynamic Host Configuration Protocol)
 : 동적 IP 주소 할당.
```

### 2.2. 도메인 (Domain)

- `localhost`
- 일반적으로의 대화에서는 `홈페이지 주소` 로 이해
- 가끔 코딩할때 `도메인`을 지켜서 `업무를 식별`해서 개발하세요.
- `DNS` 는 `Domain Name System` 로서 IP 에 글자이름 부여

### 2.3. Port 번호

- `:3000`
- `80` port 는 기본 포트입니다. (도메인으로 접속시 자동연결)
  : 80 은 안적으면 작동

### 2.4. Path

- 경로 `/todo/login`
- 경로 `/member/login`

### 2.5. Query String

- `?~~~~~`
- 질의문 (질문하고 결과 받겠다.)

## 3. URI 를 이용해서 React 에서 활용

- `react-router-dom`
- https://www.npmjs.com/package/react-router-dom
- https://reactrouter.com/start/framework/route-module
- 설치 `npm i react-router-dom`

## 4. 활용 전에 먼저 고민해 보자.

- Site Map 을 고민하자.
- 샘플

```
http://localhost:3000/            첫페이지

http://localhost:3000/about          소개
http://localhost:3000/about/mission  미션
http://localhost:3000/about/team     팀

http://localhost:3000/service     서비스


http://localhost:3000/blog           블로그
http://localhost:3000/blog/design    디자인
http://localhost:3000/blog/design/1           REST_API
http://localhost:3000/blog/design/deatil?id=1 query-string

http://localhost:3000/blog/market    마케팅
http://localhost:3000/blog/news      뉴스


http://localhost:3000/portfolio   포트폴리오
http://localhost:3000/contact     연락하기


```

## 5. Route 에 맞게 pages 폴더 구성하기

- `http://localhost:3000/` Root 페이지 또는 라우터
  : `src/pages/Index.jsx` 를 말합니다.

- `http://localhost:3000/about`
  : `src/pages/about/Index.jsx` 를 말합니다.

- `http://localhost:3000/about/team`
  : `src/pages/about/Team.jsx` 를 말합니다.

- `http://localhost:3000/service`
  : `src/pages/service/Index.jsx` 를 말합니다.

- `http://localhost:3000/service/now`
  : `src/pages/service/Now.jsx` 를 말합니다.

- `http://localhost:3000/blog`
  : `src/pages/blog/Index.jsx` 를 말합니다.

- `http://localhost:3000/blog/1`
  : `src/pages/blog/Detail.jsx` 를 말합니다.

- `http://localhost:3000/blog/list?id=1&cate=design`
  : `src/pages/blog/List.jsx` 를 말합니다.

## 6. Route 적용은 App.js에 하기로 해요.

- 아래를 지켜주셔야 합니다.
- `as` 를 확인하세요.
- `Router > Routes > Route `

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음.
// 위에 import 안에 내용만 바꾸면 밑에는 손도 안대두됨
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 6.1. `기본`으로 작업하신다면

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음
import HomePage from "./pages/Index";
import AboutPage from "./pages/about/Index";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Index";
import NowPage from "./pages/service/Now";
import BlogPage from "./pages/blog/Index";
import BlogDetailPage from "./pages/blog/Detail";
import BlogListPage from "./pages/blog/List";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/now" element={<NowPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/1" element={<BlogDetailPage />} />
        <Route path="/blog/list?id=1&cate=design" element={<BlogListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 6.2. 중첩(Nested) 라우터

- `일반적`으로 활용해요.
- `<Route index component={컴포넌트} />` 주의해요.

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음
import HomePage from "./pages/Index";
import AboutPage from "./pages/about/Index";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Index";
import NowPage from "./pages/service/Now";
import BlogPage from "./pages/blog/Index";
import BlogDetailPage from "./pages/blog/Detail";
import BlogListPage from "./pages/blog/List";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about">
          <Route index element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>

        <Route path="/service">
          <Route index element={<ServicePage />} />
          <Route path="now" element={<NowPage />} />
        </Route>

        <Route path="/blog">
          <Route index element={<BlogPage />} />
          <Route path="1" element={<BlogDetailPage />} />
          <Route path="list?id=1&cate=design" element={<BlogListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

### 6.3. 존재하지 않는 path 로 접근시 처리법

- path 는 `*` 입니다. 제일 하단에 배치 권장
- `<Route path="*" element={<NotFound />} />`

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음
import HomePage from "./pages/Index";
import AboutPage from "./pages/about/Index";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Index";
import NowPage from "./pages/service/Now";
import BlogPage from "./pages/blog/Index";
import BlogDetailPage from "./pages/blog/Detail";
import BlogListPage from "./pages/blog/List";
import NotFound from "./pages/404";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about">
          <Route index element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>

        <Route path="/service">
          <Route index element={<ServicePage />} />
          <Route path="now" element={<NowPage />} />
        </Route>

        <Route path="/blog">
          <Route index element={<BlogPage />} />
          <Route path="1" element={<BlogDetailPage />} />
          <Route path="list?id=1&cate=design" element={<BlogListPage />} />
        </Route>

        {/* 존재하지 않는 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## 7. 라우터에 `Params` 전달하기

- `Param` 단어를 ✨ 꼭! 알아야 합니다.
- 백엔드 연동시 필수 내용!
- `패스/param`
- `http://localhost:5173/good/10` : 10 이 `param`
- `http://localhost:5173/blog/21` : 21 이 `param`

- 보낼 때는 이렇게 (App.jsx)

```jsx
<Route path=":id" element={<BlogDetailPage />} />
```

- 받을 때는 (Detail.jsx)

```jsx
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  // const id = 1; param 을 보내고 받는 것으로 수정
  return (
    <div>
      /blog/<b>{id}</b> 블로그 상세 페이지(RestAPI 방식)
    </div>
  );
}

export default Detail;
```

## 8. 쿼리 스트링 활용하기

- `?` 를 무엇이라고 했나요? `Search` 한다. `질의문`

```jsx
 <Route path="list?id=1&cate=design" element={<BlogListPage />} />
        </Route>
```
