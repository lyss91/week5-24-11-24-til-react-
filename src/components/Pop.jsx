import styled from "@emotion/styled";
import { BodyStyle, TitleStyle } from "./pop-style";

const Pop = () => {
  const title = "팝업제목";
  const data = "팝업내용";
  const PopupTitle = styled.h1`
    color: hotpink;
    font-size: 20px;
    text-align: center;
  `;
  const SlideDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
  `;
  const BannerDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: ${props => props.www}px;
    height: ${props => props.hhh}px;
    background-color: ${props => props.bg}px; */
  `;
  const NoticeDiv = styled.div``;

  return (
    <div>
      <PopupTitle style={TitleStyle}>{title}</PopupTitle>
      <p style={BodyStyle}>{data}</p>

      <div className="slide-div">슬라이드</div>
      <div className="banner-div">배너</div>
      <div className="notice-div">공지사항</div>

      <SlideDiv>슬라이드</SlideDiv>
      <BannerDiv bg={"yellow"} www={200} hhh={200}>
        배너
      </BannerDiv>
      <NoticeDiv>공지사항</NoticeDiv>
    </div>
  );
};
export default Pop;