import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function MainBar(props) {
  return (
    <>
      <div>
        <Container>
          <Link to="/home">
            <Logo src={process.env.PUBLIC_URL + "/img/title_logo.png"} />
          </Link>
          <MenuContainer>
            <Link to="/home">
              <MenuImage src={process.env.PUBLIC_URL + "/img/home-fill.svg"} />
            </Link>
            <MenuImage src={process.env.PUBLIC_URL + "/img/NewPosts.svg"} />
            <MenuImage src={process.env.PUBLIC_URL + "/img/ActivityFeed.svg"} />
            <Link to="/">
              <MenuImage
                src={props.data.profile_img}
                style={{ borderRadius: 100 }}
              />
            </Link>
          </MenuContainer>
        </Container>
        <MainHr />
      </div>
    </>
  );
}
