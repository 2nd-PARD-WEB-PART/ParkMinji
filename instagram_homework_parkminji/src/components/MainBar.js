import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MydataContext } from "../context/MydataContext";
import { MediaQueryContext } from "../context/MediaQueryContext";

const MainHr = styled.hr`
  border: 0.5px solid #efefef;
  padding: 0;
  margin: 0;
`;

const Container = styled.div`
  width: "935px";
  height: 53px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 103px;
  height: 29px;
`;

const MenuContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
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

const SearchContaincer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 28px;
  border-radius: 3px;
  margin: 0 auto;
  border: 1px solid var(--Border-Color, #dbdbdb);
  background: #efefef;
  color: #8e8e8e;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export default function MainBar() {
  const { userData } = useContext(MydataContext);
  const { isPc, isTablet } = useContext(MediaQueryContext);
  return (
    <>
      <div>
        <Container
          style={{
            width: isPc ? "935px" : isTablet ? "80%" : "95%",
            justifyContent: isPc || isTablet ? null : "space-between",
            margin: isPc || isTablet ? "0 auto" : "-10px",
          }}
        >
          {isPc || isTablet ? (
            <>
              <Link to="/home">
                <Logo src={process.env.PUBLIC_URL + "/img/title_logo.png"} />
              </Link>
              <MenuContainer style={{ justifyContent: "flex-end" }}>
                <Link to="/home">
                  <MenuImage
                    src={process.env.PUBLIC_URL + "/img/home-fill.svg"}
                  />
                </Link>
                <MenuImage src={process.env.PUBLIC_URL + "/img/NewPosts.svg"} />
                <Link to="/">
                  <MenuImage
                    src={userData.profile_img}
                    style={{ borderRadius: 100 }}
                  />
                </Link>
              </MenuContainer>
            </>
          ) : (
            <MenuContainer>
              <MenuImage src={process.env.PUBLIC_URL + "/img/insta_icon.svg"} />
              <SearchContaincer>검색</SearchContaincer>
              <MenuImage src={process.env.PUBLIC_URL + "/img/small_like.svg"} />
            </MenuContainer>
          )}
        </Container>
        <MainHr />
      </div>
    </>
  );
}
