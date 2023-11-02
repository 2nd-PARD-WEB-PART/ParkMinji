import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Fonts.css";
import EditProfile from "./components/EditProfile";
import MyPage from "./components/MyPage";
import Home from "./components/Home";
import { useState } from "react";
import { MydataContext } from "./context/MydataContext";

function App() {
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
    <MydataContext.Provider value={{ userData, modifyUSerData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MydataContext.Provider>
  );
}

export default App;
