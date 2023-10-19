import React, { useState, useEffect } from "react";
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
  const [name, setName] = useState(props.data.name ? props.data.name : "");
  const [intro, setIntro] = useState(props.data.intro ? props.data.intro : "");
  const [web, setWeb] = useState(
    props.data.web_link ? props.data.web_link : ""
  );
  const [email, setEmail] = useState(props.data.email ? props.data.email : "");
  const [sex, setSex] = useState(props.data.sex ? props.data.sex : "");
  const [isChanged, setIsChanged] = useState(false);

  const fileInput = React.createRef();

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
    setImageName(file.name);
    setIsChanged(true);
  };

  useEffect(() => {
    // 모든 입력 필드의 변경 여부를 모니터링
    const fields = [name, intro, web, email, sex];
    const originalFields = [
      props.data.name,
      props.data.intro,
      props.data.web_link,
      props.data.email,
      props.data.sex,
    ];

    const hasChanged = fields.some(
      (field, index) => field !== originalFields[index]
    );

    setIsChanged(hasChanged);
  }, [name, intro, web, email, sex, props.data]);

  function handleSubmit() {
    if (imageName !== null) {
      props.modifydata(imageName, "profile_img");
    }
    if (name !== "") {
      props.modifydata(name, "name");
    }
    if (intro !== "") {
      props.modifydata(intro, "intro");
    }
    if (web !== "") {
      props.modifydata(web, "web_link");
    }
    if (email !== "") {
      props.modifydata(email, "email");
    }
    if (sex !== "") {
      props.modifydata(sex, "sex");
    }
  }

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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></InputText>
            </FormBox>
            <FormBox style={{ height: "64px" }}>
              <InputName>소개</InputName>
              <InputTextarea
                type="text"
                value={intro}
                style={{ height: "64px" }}
                onChange={(e) => {
                  setIntro(e.target.value);
                }}
              ></InputTextarea>
            </FormBox>
            <FormBox>
              <InputName>웹사이트</InputName>
              <InputText
                type="text"
                value={web}
                onChange={(e) => {
                  setWeb(e.target.value);
                }}
              ></InputText>
            </FormBox>
            <FormBox>
              <InputName>이메일</InputName>
              <InputText
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></InputText>
            </FormBox>
            <FormBox>
              <InputName>성별</InputName>
              <InputText
                type="text"
                value={sex}
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              ></InputText>
            </FormBox>
            {isChanged ? (
              <Link to="/" style={{ textDecoration: "none" }}>
                <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
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
