import { useSearchParams } from "react-router-dom";

function List() {
  // search Params 데이터 내용 출력하기
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const cate = searchParams.get("cate");

  return (
    <div>
      /blog/list?id={id}&{cate}쿼리 블러그 목록(queryString 방식)
    </div>
  );
}

export default List;
