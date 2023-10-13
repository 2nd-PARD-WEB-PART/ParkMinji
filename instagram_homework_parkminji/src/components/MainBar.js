import React from "react";
import styled from "styled-components";
import title_logo from "../img/title_logo.png";
import home from "../img/home.png";
import like from "../img/like.png";
import new_post from "../img/NewPosts.png";
import profile_img from "../img/torrr.jpg";

const MainHr = styled.hr`
  border: 0.5px solid #efefef;
  padding: 0;
  margin: 0;
`;

const Container = styled.div`
  /* border: 1px solid; */
  width: 935px;
  height: 53px;
  display: flex;
  align-items: center;
  /* div 같은 블록의 중앙 정렬 */
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 103px;
  height: 29px;
`;

const MenuContainer = styled.div`
  width: 178px;
  height: 36px;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
  margin-left: auto;
`;

const MenuImage = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 22px;
  margin-right: 0px;
`;

export default function MainBar() {
  return (
    <>
      <div>
        <Container>
          <Logo src={title_logo} />
          <MenuContainer>
            <MenuImage src={home} />
            <MenuImage src={new_post} />
            <MenuImage src={like} />
            <MenuImage src={profile_img} style={{ borderRadius: 100 }} />
          </MenuContainer>
        </Container>
        <MainHr />
      </div>
    </>
  );
}
