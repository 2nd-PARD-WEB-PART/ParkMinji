import styled from "styled-components";
import MainBar from "./MainBar";
import React, { useContext, useState } from "react";
// 해당 컴포넌트에서는 MydataContext와 MediaQueryContext context가 사용되기 때문에 import하여 create한 context를 불러온다.
import { MydataContext } from "../context/MydataContext";
import { MediaQueryContext } from "../context/MediaQueryContext";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  width: 945px;
  height: calc(100vh - 53px);
  margin: 0 auto;
  align-items: center;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 642px;
  height: 100%;
  padding-top: 139.15px;
  align-items: center;
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
  /* height: 903px; */
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
  box-sizing: border-box;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  width: 614px;
  /* height: 205px; */
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

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 614px;
  height: 100%;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 614px;
  height: 34px;
  padding: 0px 0px 16px 16px;
`;

const UserIdInComment = styled.div`
  box-sizing: border-box;
  width: 112px;
  height: 18px;
  color: rgba(0, 0, 0, 0.71);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const ContentsInComment = styled.div`
  box-sizing: border-box;
  width: 431px;
  height: 18px;
  color: rgba(0, 0, 0, 0.7);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const CommentLikeIcon = styled.img`
  width: 14px;
  height: 14px;
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
  width: 490px;
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
  width: 40px;
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

const ProfileContainer1 = styled.div`
  width: 293px;
  height: 100%;
`;

const ProfileContainer2 = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* 이미지 사이의 간격을 최대화합니다. */
  margin: -10px;
  padding: 0px 30px 0px 30px;
  border-top: 1px solid #efefef;
`;

const ProfileBox = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 45px;
  width: 293px;
  height: 56px;
`;

const ProfileImg = styled.img`
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  margin-right: 12px;
`;

const ProfileName = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 6px 0px 6px 12px;
  color: var(--Black, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  text-transform: lowercase;
`;

const MenuImage = styled.img`
  width: 17px;
  height: 17px;
`;

const ProfileImg2 = styled.img`
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  border-radius: 100%;
`;

export default function Home() {
  // App.js 에서 넣어준 MydataContext 데이터 저장
  const { userData, modifyUSerData } = useContext(MydataContext);
  // 반응형을 위한 width에 따른 해상도 구분context
  const { isPc, isTablet } = useContext(MediaQueryContext);
  const [isLikeChanged, setIsLikeChanged] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [content, setContent] = useState("");

  const saveComment = (e) => {
    setContent(e.target.value);
  };

  const pushCommentList = () => {
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        user: userData.name,
        contents: content,
        islike: false,
      },
    ]);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      pushCommentList();
      setContent("");
    }
  };

  function HandleLikeChange() {
    if (isLikeChanged) {
      modifyUSerData(userData.like_num - 1, "like_num");
      modifyUSerData(!userData.is_like, "is_like");
    } else {
      modifyUSerData(userData.like_num + 1, "like_num");
      modifyUSerData(!userData.is_like, "is_like");
    }
    setIsLikeChanged(!isLikeChanged);
  }

  const onLikeChange = (targetId) => {
    setCommentList(
      commentList.map((it) =>
        it.id === targetId ? { ...it, islike: !it.islike } : it
      )
    );
  };

  // 반응형 웹을 위해서 style의 삼항연산자를 이용하여 MediaQueryContext에서 가져온 해상도 값의 유무를 통해 스타일을 적용해주었다.
  return (
    <div>
      <MainBar />
      <MainContainer
        style={{
          flexDirection: isPc ? "row" : "column",
          width: isPc ? "100vh" : "95%",
        }}
      >
        <PostContainer
          style={{
            height: isPc ? "100%" : `calc(100% - 53px)`,
            width: isPc ? "642px" : "95%",
          }}
        >
          <FeedContainer
            style={{
              width: isPc ? "642px" : "95%",
              padding: isPc ? "0px 28px 24px 0px" : "0px",
            }}
          >
            <Header
              style={{
                width: isPc ? "100%" : "95%",
              }}
            >
              <HeaderProfile>
                <HeaderProfileBorder
                  src={process.env.PUBLIC_URL + "/img/Ellipse.svg"}
                />
                <HeaderProfileImg
                  src={process.env.PUBLIC_URL + "/img/profile_img.png"}
                />
              </HeaderProfile>
              <HeaderProfileName
                style={{
                  width: isPc ? "506px" : "70%",
                  fontSize: isPc ? "14px" : "12px",
                }}
              >
                handsomeguy
              </HeaderProfileName>
              <HeaderOption src={process.env.PUBLIC_URL + "/img/More.svg"} />
            </Header>
            <FeedImg
              src={process.env.PUBLIC_URL + "/img/235.png"}
              style={{
                width: isPc ? "614px" : "95%",
                height: isPc ? "614px" : "auto",
              }}
            />
            <Footer style={{ width: isPc ? "614px" : "95%" }}>
              <FooterIconContainer
                style={{
                  width: isPc ? "614px" : "100%",
                  padding: isPc ? "6px 16px 8px 16px" : "6px 16px 8px 16px",
                }}
              >
                {userData.is_like ? (
                  <FooterIcon
                    src={process.env.PUBLIC_URL + "/img/Fill_Like.svg"}
                    onClick={HandleLikeChange}
                    style={{
                      width: isPc || isTablet ? "24px" : "6%",
                      height: isPc || isTablet ? "24px" : "auto",
                    }}
                  />
                ) : (
                  <FooterIcon
                    src={process.env.PUBLIC_URL + "/img/Like.svg"}
                    onClick={HandleLikeChange}
                    style={{
                      width: isPc || isTablet ? "24px" : "6%",
                      height: isPc || isTablet ? "24px" : "auto",
                    }}
                  />
                )}
                <FooterIcon
                  src={process.env.PUBLIC_URL + "/img/Comment.svg"}
                  style={{
                    width: isPc || isTablet ? "24px" : "6%",
                    height: isPc || isTablet ? "24px" : "auto",
                  }}
                />
                <FooterIcon
                  src={process.env.PUBLIC_URL + "/img/SharePosts.svg"}
                  style={{
                    width: isPc || isTablet ? "24px" : "6%",
                    height: isPc || isTablet ? "24px" : "auto",
                  }}
                />
                <div style={{ width: "428px" }}></div>
                <FooterIcon
                  src={process.env.PUBLIC_URL + "/img/Save2.svg"}
                  style={{
                    width: isPc || isTablet ? "24px" : "6%",
                    height: isPc || isTablet ? "24px" : "auto",
                  }}
                />
              </FooterIconContainer>
              <LikeNumContainer
                style={{
                  width: isPc ? "614px" : "100%",
                  height: isPc || isTablet ? "18px" : "12px",
                  fontSize: isPc || isTablet ? "14px" : "12px",
                }}
              >
                좋아요 {userData.like_num}개
              </LikeNumContainer>
              <FeedTextContainer
                style={{
                  width: isPc || isTablet ? "614px" : "100%",
                  height: isPc || isTablet ? "44px" : "44px",
                }}
              >
                <FeedText
                  style={{
                    fontSize: isPc || isTablet ? "14px" : "12px",
                  }}
                >
                  handsomeguy
                </FeedText>
                <FeedText
                  style={{
                    width: isPc || isTablet ? "470px" : "100%",
                    fontSize: isPc || isTablet ? "14px" : "12px",
                  }}
                >
                  파드 파이팅!!
                </FeedText>
              </FeedTextContainer>
              {commentList.length === 0 ? (
                <Time style={{ width: isPc || isTablet ? "112px" : "100%" }}>
                  1 hour ago
                </Time>
              ) : (
                <CommentContainer style={{ width: isPc ? "614px" : "100%" }}>
                  {commentList.map((iter) => (
                    <Comment
                      key={iter.id}
                      style={{
                        width: isPc ? "614px" : "100%",
                        height: isPc ? "18px" : "12px",
                        fontSize: isPc ? "14px" : "12px",
                      }}
                    >
                      <UserIdInComment
                        style={{
                          width: isPc ? "112px" : "30%",
                          fontSize: isPc ? "14px" : "12px",
                        }}
                      >
                        {iter.user}
                      </UserIdInComment>
                      <ContentsInComment
                        style={{
                          width: isPc ? "431px" : "60%",
                          fontSize: isPc ? "14px" : "12px",
                        }}
                      >
                        {iter.contents}
                      </ContentsInComment>
                      {iter.islike ? (
                        <CommentLikeIcon
                          src={
                            process.env.PUBLIC_URL + "/img/small_like_fill.svg"
                          }
                          onClick={() => {
                            onLikeChange(iter.id);
                          }}
                          style={{
                            width: isPc || isTablet ? "14px" : "5%",
                            height: isPc || isTablet ? "14px" : "auto",
                          }}
                        ></CommentLikeIcon>
                      ) : (
                        <CommentLikeIcon
                          src={process.env.PUBLIC_URL + "/img/small_like.svg"}
                          onClick={() => {
                            onLikeChange(iter.id);
                          }}
                          style={{
                            width: isPc || isTablet ? "14px" : "5%",
                            height: isPc || isTablet ? "14px" : "auto",
                          }}
                        ></CommentLikeIcon>
                      )}
                    </Comment>
                  ))}
                </CommentContainer>
              )}

              <WriteCommentContainer style={{ width: isPc ? "614px" : "100%" }}>
                <WriteImg
                  src={process.env.PUBLIC_URL + "/img/Emoji.svg"}
                  style={{
                    width: isPc || isTablet ? "24px" : "8%",
                    height: isPc || isTablet ? "24px" : "auto",
                    margin:
                      isPc || isTablet
                        ? "8px 16px 8px 0px"
                        : "8px 10px 8px 0px",
                  }}
                ></WriteImg>
                <WriteCommentInput
                  type="text"
                  placeholder="댓글달기..."
                  value={content === "" ? "" : content}
                  onChange={saveComment}
                  onKeyPress={onKeyPress}
                  style={{
                    fontSize: isPc ? "14px" : "8%",
                    paddingLeft: isPc ? "17px" : "5%",
                    width: isPc ? "490px" : "80%",
                  }}
                ></WriteCommentInput>
                <SubmitComment
                  onClick={() => {
                    if (content.length > 0) {
                      pushCommentList();
                    }
                    setContent("");
                  }}
                  style={{ fontSize: isPc ? "12%" : "9%" }}
                >
                  게시
                </SubmitComment>
              </WriteCommentContainer>
            </Footer>
          </FeedContainer>
        </PostContainer>
        {isPc ? (
          <ProfileContainer1>
            <ProfileBox>
              <ProfileImg src={userData.profile_img}></ProfileImg>
              <ProfileName>{userData.name}</ProfileName>
            </ProfileBox>
          </ProfileContainer1>
        ) : isTablet ? (
          <></>
        ) : (
          <ProfileContainer2>
            <Link to="/home">
              <MenuImage src={process.env.PUBLIC_URL + "/img/home-fill.svg"} />
            </Link>
            <MenuImage src={process.env.PUBLIC_URL + "/img/NewPosts.svg"} />
            <ProfileImg2 src={userData.profile_img}></ProfileImg2>
          </ProfileContainer2>
        )}
      </MainContainer>
    </div>
  );
}
