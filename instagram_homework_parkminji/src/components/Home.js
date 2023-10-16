import styled from "styled-components";
import MainBar from "./MainBar";

const MainContainer = styled.div`
  display: flex;
  width: 945px;
  height: calc(100vh - 53px);
  margin: 0 auto;
  /* border: 1px solid; */
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 642px;
  height: 100%;
  /* border: 1px solid blue; */
  padding-top: 139.15px;
  overflow: scroll;
  flex-shrink: 0;

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FeedContainer = styled.div`
  /* box-sizing 쓰면 padding 써도 크기 증가 안함 */
  box-sizing: border-box;
  width: 642px;
  height: 903px;
  padding: 0px 28px 24px 0px;
`;

const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 9px 0px 9px 16px;
  width: 100%;
  height: 60px;
  align-items: center;
  border: 1px solid #efefef;
`;

const HeaderProfile = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
`;

const HeaderProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const HeaderProfileBorder = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
`;

const HeaderProfileName = styled.div`
  box-sizing: border-box;
  width: 506px;
  height: 100%;
  padding: 10px 0px 10px 14px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

const HeaderOption = styled.img`
  box-sizing: border-box;
  margin: 8px;
  width: 24px;
  height: 24px;
`;

const FeedImg = styled.img`
  width: 614px;
  height: 614px;
  /* 이미지 밑 공백을 없애고 싶을 때 */
  vertical-align: bottom;
`;

const Footer = styled.div`
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  width: 614px;
  height: 205px;
`;

const FooterIconContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 614px;
  height: 56px;
  padding: 6px 16px 8px 16px;
`;

const FooterIcon = styled.img`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin: 8px;
`;

const LikeNumContainer = styled.div`
  box-sizing: border-box;
  width: 614;
  height: 18px;
  padding-left: 16px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  text-transform: lowercase;
`;

const FeedTextContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0px 16px;
  width: 614px;
  height: 44px;
`;

const FeedText = styled.div`
  width: 112px;
  height: 44px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
`;

const Time = styled.div`
  box-sizing: border-box;
  width: 614px;
  height: 35px;
  padding: 0px 0px 16px 16px;
  color: var(--Gray, #8e8e8e);
  font-family: Segoe UI;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const WriteCommentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 614px;
  height: 52px;
  border-top: 1px solid #efefef;
  padding: 6px 16px;
`;

const WriteImg = styled.img`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin: 8px 16px 8px 0px;
`;

const WriteCommentInput = styled.input`
  box-sizing: border-box;
  width: 509px;
  height: 40px;
  padding-left: 17px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  border: 0px;
  /* focus됐을때 파란 테두리 없애는 효과 */
  outline: none;
`;

const SubmitComment = styled.button`
  width: 26px;
  height: 40px;
  color: #0095f6;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 128.571% */
  text-transform: capitalize;
  background-color: white;
  border: 0px;
  padding: 0px;
`;

const ProfileContainer = styled.div`
  width: 293px;
  height: 100%;
`;

export default function Home(props) {
  return (
    <div>
      <MainBar data={props.data} />
      <MainContainer>
        <PostContainer>
          <FeedContainer>
            <Header>
              <HeaderProfile>
                <HeaderProfileBorder
                  src={process.env.PUBLIC_URL + "/img/Ellipse.svg"}
                />
                <HeaderProfileImg src={props.data.feed_profile_img} />
              </HeaderProfile>
              <HeaderProfileName>{props.data.feed_name}</HeaderProfileName>
              <HeaderOption src={process.env.PUBLIC_URL + "/img/More.svg"} />
            </Header>
            <FeedImg src={props.data.feed_img} />
            <Footer>
              <FooterIconContainer>
                <FooterIcon src={process.env.PUBLIC_URL + "/img/Like.svg"} />
                <FooterIcon src={process.env.PUBLIC_URL + "/img/Comment.svg"} />
                <FooterIcon
                  src={process.env.PUBLIC_URL + "/img/SharePosts.svg"}
                />
                <div style={{ width: "428px" }}></div>
                <FooterIcon src={process.env.PUBLIC_URL + "/img/Save2.svg"} />
              </FooterIconContainer>
              <LikeNumContainer>
                좋아요 {props.data.like_num}개
              </LikeNumContainer>
              <FeedTextContainer>
                <FeedText>{props.data.feed_name}</FeedText>
                <FeedText style={{ width: "470px" }}>
                  {props.data.feed_text}
                </FeedText>
              </FeedTextContainer>
              <Time>1 hour ago</Time>
              <WriteCommentContainer>
                <WriteImg
                  src={process.env.PUBLIC_URL + "/img/Emoji.svg"}
                ></WriteImg>
                <WriteCommentInput
                  type="text"
                  value="댓글달기..."
                ></WriteCommentInput>
                <SubmitComment>게시</SubmitComment>
              </WriteCommentContainer>
            </Footer>
          </FeedContainer>
        </PostContainer>
        <ProfileContainer></ProfileContainer>
      </MainContainer>
    </div>
  );
}
