import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import MainBar from "./MainBar";
import { Link } from "react-router-dom";
import { MydataContext } from "../context/MydataContext";
import axios from "axios";

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

export default function EditProfile() {
  const { userData, modifyUSerData } = useContext(MydataContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [name, setName] = useState(userData.name ? userData.name : "");
  const [age, setAge] = useState(userData.age ? userData.age : "");
  const [part, setPart] = useState(userData.part ? userData.part : "");
  const [isChanged, setIsChanged] = useState(false);

  const fileInput = React.createRef();

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  // 이미지 업로드를 위한 함수
  const ImageUpload = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    // console.log(formData);
    axios
      .post("http://3.35.236.83/image", formData)
      .then((response) => {
        console.log("이미지가 성공적으로 업로드되었습니다:", response.data);
        // 서버에서의 응답을 처리합니다.
        // setImageSrc, Name을 해줘야 사진이 editprofile에서도 바뀜.
        setImageSrc(response.data);
        setIsChanged(true);
      })
      .catch((error) => {
        console.error("이미지 업로드 중 오류 발생:", error);
        // 오류를 처리합니다.
      });
  };

  // 새로운 이미지가 클릭되었을 때 선택된 이미지를 file에 저장하고 서버에 업로드해준다.
  const onChangeImage = async (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    if (file) {
      const newImgURL = await ImageUpload(file);
      console.log(newImgURL);
    }
  };

  useEffect(() => {
    // 모든 입력 필드의 변경 여부를 모니터링
    const fields = [name, age, part];
    const originalFields = [userData.name, userData.age, userData.part];

    const hasChanged = fields.some(
      (field, index) => field !== originalFields[index]
    );

    setIsChanged(hasChanged);
  }, [name, age, part, userData]);

  function handleSubmit() {
    if (imageSrc !== null) {
      modifyUSerData(imageSrc, "imgURL");
    }
    if (name !== "") {
      modifyUSerData(name, "name");
    }
    if (age !== "") {
      modifyUSerData(age, "age");
    }
    if (part !== "") {
      modifyUSerData(part, "part");
    }

    console.log(imageSrc);
    // 서버측에 업데이트
    axios
      .patch("http://3.35.236.83/pard/update/박민지", userData)
      .then((response) => {
        console.log("PATCH response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <MainBar />
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
                <ProfileImg src={userData.imgURL} />
              )}
              <ProfileSecondContainer>
                <UserName>{userData.name}</UserName>
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
            <FormBox>
              <InputName>나이</InputName>
              <InputText
                type="text"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              ></InputText>
            </FormBox>
            <FormBox>
              <InputName>파트</InputName>
              <InputText
                type="text"
                value={part}
                onChange={(e) => {
                  setPart(e.target.value);
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
