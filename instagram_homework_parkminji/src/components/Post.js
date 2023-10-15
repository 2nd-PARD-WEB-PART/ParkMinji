import styled from "styled-components";

const MainContainer = styled.div`
  width: 945px;
  height: 250px;
  /* border: 1px solid; */
  margin: 0 auto;
`;

const MainHr = styled.hr`
  border: 1 solid #dbdbdb;
  padding: 0;
  margin: 0;
`;

const MenuBar = styled.div`
  height: 53px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 70px;
  height: 19px;
  text-align: center;
  font-family: "Abel";
  color: #262626;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 18px;
  word-wrap: break-word;
  padding: 17px;
`;

const LeftMenu = styled.div`
  width: 70px;
  height: 57px;
  text-align: center;
  font-family: "Abel";
  color: #262626;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 18px;
  word-wrap: break-word;
`;

const SmallMenu = styled.div`
  width: 52px;
  height: 19px;
  border: 0px solid;
  padding-top: 17px;
  padding-bottom: 17px;
`;

const MenuImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

const PostContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostImg = styled.img`
  width: 300px;
  height: 300px;
`;

export default function Post() {
  return (
    <>
      <MainContainer>
        <MainHr />
        <MenuBar>
          <LeftMenu>
            <SmallMenu style={{ borderTopWidth: 1.5 }}>
              <MenuImg src={process.env.PUBLIC_URL + "/img/Posts.svg"} />
              게시물
            </SmallMenu>
          </LeftMenu>
          <Menu>
            <MenuImg src={process.env.PUBLIC_URL + "/img/Save.svg"} />
            저장됨
          </Menu>
          <Menu>
            <MenuImg src={process.env.PUBLIC_URL + "/img/Tagged.svg"} />
            태그됨
          </Menu>
        </MenuBar>
        <PostContainer>
          <PostImg src={process.env.PUBLIC_URL + "/img/coffee.jpg"} />
          <PostImg
            src={process.env.PUBLIC_URL + "/img/rain.jpg"}
            style={{ marginLeft: 19, marginRight: 19 }}
          />
          <PostImg src={process.env.PUBLIC_URL + "/img/night.jpg"} />
        </PostContainer>
      </MainContainer>
    </>
  );
}
