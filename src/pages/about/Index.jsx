import img from "../../assets/img.jpg";

function Index() {
  return (
    <div>
      /about/Index 인덱스페이지
      <img src="img.jpg" />
      <img src={img} />
    </div>
  );
}

export default Index;
