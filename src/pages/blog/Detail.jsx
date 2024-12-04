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
