import Footer from "../components/Footer";
import Header from "../components/Header";

function IndexPage() {
  return (
    <div>
      <Header>상단</Header>
      <main>
        <div>공지사항/갤러리</div>
        <div>배너</div>
        <div>바로가기</div>
      </main>
      <Footer>하단</Footer>;
    </div>
  );
}

// 외부에서 활용하도록
export default IndexPage;
