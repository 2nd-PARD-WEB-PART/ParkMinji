import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Fonts.css";
import EditProfile from "./components/EditProfile";
import MyPage from "./components/MyPage";
import Home from "./components/Home";
import { useState } from "react";
import { MydataContext } from "./context/MydataContext"; //for Context
import { MediaQueryContext } from "./context/MediaQueryContext"; //for Context
import { useMediaQuery } from "react-responsive"; // for 반응형 웹

function App() {
  // isPc, isTablet, isMobile이라는 변수를 사용하여 특정 width일 때의 선택될 수 있는 화면을 정의한다.
  const isPc = useMediaQuery({
    query: "(min-width:750px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:450px) and (max-width:749px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:449px)",
  });

  let data = {
    name: "__min.zzi",
    profile_img: "/img/torrr.jpg",
    intro: "서핑데이 기대된다!",
    web_link: "",
    email: "",
    sex: "",
    is_like: false,
    like_num: 1069,
  };

  const [userData, setUserData] = useState(data);

  const modifyUSerData = (e, field) => {
    let newValue = e;
    if (field === "profile_img") {
      newValue = "/img/" + String(e);
    } else if (field === "is_like") {
      newValue = e;
    } else if (field === "like_num") {
      newValue = e;
    } else {
      newValue = e;
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: newValue,
    }));
  };

  return (
    // context API를 만들어서 모든 컴포넌트에서 해상도 조정시 반응형 웹으로 조정할 수 있도록 정해놓은 특정 값들을 보내준다.
    // 총 사용되는 Context API는 반응형 웹을 위한 MediaQueryContext와 instagram 데이터를 저장해놓은 MydataContext이다.
    <MediaQueryContext.Provider value={{ isPc, isTablet, isMobile }}>
      <MydataContext.Provider value={{ userData, modifyUSerData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MyPage />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MydataContext.Provider>
    </MediaQueryContext.Provider>
  );
}

export default App;
