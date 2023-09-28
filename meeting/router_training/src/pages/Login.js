import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoggedIn(true);
    navigate("../mypage");
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={handleClick}>로그인</button>
    </div>
  );
};

export default Login;
