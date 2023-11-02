import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MydataContext } from "../context/MydataContext";

const MainContainer = styled.div`
  width: 945px;
  height: 150px;
  /* border: 1px solid; */
  margin: 0 auto;
  margin-top: 22px;
  margin-bottom: 44px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-left: 71px;
  margin-right: 101px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
`;

const SubContainer = styled.div`
  width: 613px;
  height: 122px;
  /* border: 1px solid; */
  margin-left: auto;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const SecondContainer = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  // 프로필 편집
  color: #262626;
  font-size: 28px;
  font-family: "Abel";
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 88px;
  height: 30px;
  font-family: "Abel";
  background-color: white;
  font-size: 14px;
  color: #262626;
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-right: 5px;
`;

const OptionImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

const MiddleContainer = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MiddleText = styled.div`
  color: #262626;
  font-size: 16px;
  font-family: "Abel";
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
`;

const MiddleNumber = styled.div`
  color: #262626;
  font-size: 16px;
  font-family: "Abel";
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
  width: 40px;
  padding-left: 6px;
`;

const ThirdContainer = styled.div`
  height: 24px;
`;

const Intro = styled.div`
  color: #262626;
  font-size: 16px;
  font-family: "Abel";
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

export default function Profile() {
  const { userData } = useContext(MydataContext);
  return (
    <>
      <MainContainer>
        <Link to="/edit_profile">
          <ProfileImg src={userData.profile_img} />
        </Link>
        <SubContainer>
          <SecondContainer>
            <Name>{userData.name}</Name>
            <Link to="/edit_profile">
              <Button>프로필 편집</Button>
            </Link>
            <Link to="/edit_profile">
              <OptionImg src={process.env.PUBLIC_URL + "/img/Options.png"} />
            </Link>
          </SecondContainer>
          <MiddleContainer>
            <MiddleText>게시물</MiddleText>
            <MiddleNumber>3</MiddleNumber>
            <MiddleText>팔로워</MiddleText>
            <MiddleNumber>484</MiddleNumber>
            <MiddleText>팔로우</MiddleText>
            <MiddleNumber>525</MiddleNumber>
          </MiddleContainer>
          <ThirdContainer>
            <Intro>{userData.intro}</Intro>
          </ThirdContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
}
