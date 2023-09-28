import { useParams } from "react-router-dom";

const data = {
  Kjs: {
    name: "김진서",
    description: "파드 2기의 웹 파트장",
  },
  Kyj: {
    name: "김유진",
    description: "파드 2기의 웹 부파트장",
  },
};

function Profile() {
  const params = useParams();

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

export default Profile;
