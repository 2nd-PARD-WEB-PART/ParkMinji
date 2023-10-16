import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MainBar from "./MainBar";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 100vh;
  padding-top: 32px;
`;

const MainForm = styled.div`
  width: 918px;
  height: 647px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #efefef;
  margin: 0 auto;
  display: flex;
`;

const LeftEditContainer = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const EditMenu = styled.div`
  width: 220px;
  height: 407px;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 699px;
  height: 100%;
  /* border: 1px solid; */
`;

const DetailMenu = styled.div`
  width: 219px;
  height: 53px;
  /* border: 1px solid; */
  display: flex;
`;

const MenuText = styled.div`
  margin-left: 41px;
  margin-top: 17px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Abel";
`;

const Line = styled.div`
  width: 3px;
  height: 52px;
  background-color: black;
`;

const MetaBox = styled.div`
  width: 220px;
  height: 240px;
  border-right: 1px solid #efefef;
`;

const MetaImage = styled.img`
  width: 60px;
  height: 12px;
  margin-top: 57px;
  margin-left: 28px;
`;

const MetaMiddleText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #0095f6;
  margin-left: 28px;
  margin-top: 10px;
  line-height: 16px;
  font-family: "Roboto";
`;

const MetaSmallText = styled.div`
  width: 165px;
  height: 80px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #8e8e8e;
  margin-left: 28px;
  margin-top: 10px;
  margin-bottom: 57px;
  line-height: 16px;
  font-family: "Roboto";
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 55px;
`;

const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;

  margin-left: 125px;
  margin-right: 32px;
`;

const ProfileSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: 0px;
  background: white;
  color: #0095f6;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const UserName = styled.div`
  color: #262626;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FormBox = styled.div`
  display: flex;
  width: 700px;
  height: 32px;
  margin-bottom: 43px;
`;

const InputName = styled.div`
  width: 167px;
  height: 32px;
  color: #262626;
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const InputText = styled.input`
  width: 355px;
  height: 32px;
  margin-left: 33px;
  border-radius: 2px;
  border: 1px solid #efefef;
  background: #fff;
`;

const InputTextarea = styled.textarea`
  width: 355px;
  height: 32px;
  margin-left: 33px;
  border-radius: 2px;
  border: 1px solid #efefef;
  background: #fff;
  vertical-align: top;
`;

const NoSubmitButton = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 4px;
  background: rgba(0, 149, 246, 0.25);
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  margin-right: 437px;
`;

const SubmitButton = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 4px;
  background: #0095f6;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  margin-right: 437px;
`;

export default function EditProfile(props) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [isChanegeName, setIsChangeName] = useState(null);
  const [isChanegeEmail, setIsChangeEmail] = useState(null);
  const [isChanegeIntro, setIsChangeIntro] = useState(null);
  const [isChanegeWeb, setIsChangeWeb] = useState(null);
  const [isChanegeSex, setIsChangeSex] = useState(null);

  const [isChanged, setIsChanged] = useState(false);

  const fileInput = React.createRef();

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  function change() {
    setIsChanged(true);
  }

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
    setImageName(file.name);
    change();
  };

  return (
    <div>
      <MainBar data={props.data} />
      <Container>
        <MainForm>
          <LeftEditContainer>
            <EditMenu>
              <DetailMenu>
                <Line />
                <MenuText>프로필 편집</MenuText>
              </DetailMenu>
              <DetailMenu>
                <MenuText>비밀번호 변경</MenuText>
              </DetailMenu>
            </EditMenu>
            <MetaBox>
              <MetaImage src={process.env.PUBLIC_URL + "/img/meta.svg"} />
              <MetaMiddleText>Accounts center</MetaMiddleText>
              <MetaSmallText>
                Control settings for connected experiences on Instagram, the
                Facebook app, and Messenger, including sharing stories and
                posts, and logging in.
              </MetaSmallText>
            </MetaBox>
          </LeftEditContainer>

          <EditForm>
            <ProfileContainer>
              {imageSrc ? (
                <ProfileImg src={imageSrc} />
              ) : (
                <ProfileImg src={props.data.profile_img} />
              )}
              <ProfileSecondContainer>
                <UserName>{props.data.name}</UserName>
                <Button onClick={handleButtonClick}>프로필 사진 바꾸기</Button>
                <input
                  type="file"
                  ref={fileInput}
                  onChange={onChangeImage}
                  style={{ display: "none" }}
                />
              </ProfileSecondContainer>
            </ProfileContainer>
            <FormBox>
              <InputName>사용자 이름</InputName>
              <InputText
                type="text"
                value={isChanegeName === null ? props.data.name : null}
                onChange={(e) => {
                  setIsChangeName(e);
                  change();
                }}
              ></InputText>
            </FormBox>
            <FormBox style={{ height: "64px" }}>
              <InputName>소개</InputName>
              <InputTextarea
                type="text"
                value={isChanegeIntro === null ? props.data.intro : null}
                style={{ height: "64px" }}
                onChange={(e) => {
                  setIsChangeIntro(e);
                  change();
                }}
              ></InputTextarea>
            </FormBox>
            <FormBox>
              <InputName>웹사이트</InputName>
              <InputText
                type="text"
                value={isChanegeWeb === null ? props.data.web_link : null}
                onChange={(e) => {
                  setIsChangeWeb(e);
                  change();
                }}
              ></InputText>
            </FormBox>
            <FormBox>
              <InputName>이메일</InputName>
              <InputText
                type="text"
                value={isChanegeEmail === null ? props.data.email : null}
                onChange={(e) => {
                  setIsChangeEmail(e);
                  change();
                }}
              ></InputText>
            </FormBox>
            <FormBox>
              <InputName>성별</InputName>
              <InputText
                type="text"
                value={isChanegeSex === null ? props.data.sex : null}
                onChange={(e) => {
                  setIsChangeSex(e);
                  change();
                }}
              ></InputText>
            </FormBox>
            {isChanged ? (
              <Link to="/" style={{ textDecoration: "none" }}>
                <SubmitButton
                  onClick={() => {
                    // 아마 이렇게 하는 방법 말고 한번에 바꾸는 방법이 있을텐데 이미 Modifydata 함수를 만들어버려서 코드 수정하기 너무 귀찮다.
                    // 시간되면 방법찾아보고 개선해봐야지.
                    if (imageName !== null) {
                      props.modifydata(imageName, "profile_img");
                    }
                    if (isChanegeName !== null) {
                      props.modifydata(isChanegeName, "name");
                    }
                    if (isChanegeIntro !== null) {
                      props.modifydata(isChanegeIntro, "intro");
                    }
                    if (isChanegeWeb !== null) {
                      props.modifydata(isChanegeWeb, "web_link");
                    }
                    if (isChanegeEmail !== null) {
                      props.modifydata(isChanegeEmail, "email");
                    }
                    if (isChanegeSex !== null) {
                      props.modifydata(isChanegeSex, "sex");
                    }
                  }}
                >
                  제출
                </SubmitButton>
              </Link>
            ) : (
              <NoSubmitButton>제출</NoSubmitButton>
            )}
          </EditForm>
        </MainForm>
      </Container>
    </div>
  );
}