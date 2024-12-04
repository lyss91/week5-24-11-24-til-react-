import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// as 는 alias 라는 문법으로 별칭을 지음.
// 위에 import 안에 내용만 바꾸면 밑에는 손도 안대두됨

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
          {/* <Route path="1" element={<BlogDetailPage />} /> */}
          <Route path=":id" element={<BlogDetailPage />} />
          {/* <Route path="delete/:id" element={<BlogDetailPage />} /> */}
          {/* <Route path="list?id=1&cate=design" element={<BlogListPage />} /> */}
          <Route path="list" element={<BlogListPage />} />
        </Route>

        {/* 존재하지 않는 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
