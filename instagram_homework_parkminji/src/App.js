import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Fonts.css";
import EditProfile from "./components/EditProfile";
import MyPage from "./components/MyPage";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const data = {
    name: "__min.zzi",
    profile_img: "/img/torrr.jpg",
    intro: "서핑데이 기대된다!",
    web_link: "",
    email: "",
    sex: "",
    feed_name: "handsomeguy",
    feed_profile_img: "/img/profile_img.png",
    feed_img: "/img/235.png",
    feed_text: "파드 파이팅!!",
    is_like: false,
    like_num: "1069",
    comment: [],
  };

  const [userData, setUserData] = useState(data);

  const modifyUSerData = (e, field) => {
    let newValue = e;
    // console.log(field);
    if (field === "profile_img") {
      newValue = "/img/" + String(e);
    } else if (field === "is_like") {
      newValue = String(e);
    } else if (field === "like_num") {
      newValue = e;
      //   console.log(newValue);
    } else {
      newValue = e;
    }

    // console.log(field);

    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: newValue,
    }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage data={userData} />} />
        <Route
          path="/edit_profile"
          element={<EditProfile data={userData} modifydata={modifyUSerData} />}
        />
        <Route
          path="/home"
          element={<Home data={userData} modifydata={modifyUSerData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
