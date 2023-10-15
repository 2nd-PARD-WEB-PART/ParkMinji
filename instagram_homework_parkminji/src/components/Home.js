import styled from "styled-components";
import MainBar from "./MainBar";

const MainContainer = styled.div`
  display: flex;
  width: 945px;
  height: 1080px;
  /* border: 1px solid; */
  margin: 0 auto;
  /* justify-content: center; */
  /* align-items: flex-start; */
  flex-shrink: 0;

  border: 1px solid;
`;

const PostContainer = styled.div`
  width: 642px;
  height: 100%;
  border: 1px solid blue;
`;

const ProfileContainer = styled.div`
  width: 293px;
  height: 100%;
  border: 1px solid green;
`;

export default function Home(props) {
  return (
    <div>
      <MainBar data={props.data} />
      <MainContainer>
        <PostContainer></PostContainer>
        <ProfileContainer></ProfileContainer>
      </MainContainer>
    </div>
  );
}
