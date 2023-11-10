import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Fonts.css";
import EditProfile from "./components/EditProfile";
import MyPage from "./components/MyPage";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import { MydataContext } from "./context/MydataContext"; //for Context
import { MediaQueryContext } from "./context/MediaQueryContext"; //for Context
import { useMediaQuery } from "react-responsive"; // for 반응형 웹
import axios from "axios"; //for axios

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
    age: "19",
    part: "Web",
    imgURL: "/img/torrr.jpg",
    is_like: false,
    like_num: 1069,
  };

  const [userData, setUserData] = useState(data);

  // 데이터는 한번만 불러오면 되기 떄문에 useEffect 사용
  useEffect(() => {
    //비동기식 함수를 사용해야함
    async function getData() {
      try {
        axios.get("http://3.35.236.83/pard/search/박민지").then((response) => {
          //서버측 데이터 보면 실제 데이터는 response.data.data에 저장되어 있음.
          console.log("response: " + JSON.stringify(response.data.data));
          //데이터 업데이트.
          setUserData(response.data.data);
        });
      } catch (error) {
        console.log("error: " + error);
      }
    }
    getData();
  }, []); //한번만 수행

  const modifyUSerData = (e, field) => {
    let newValue = e;
    if (field === "imgURL") {
      newValue = String(e);
      console.log(newValue);
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
      <MydataContext.Provider value={{ userData, modifyUSerData, setUserData }}>
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
