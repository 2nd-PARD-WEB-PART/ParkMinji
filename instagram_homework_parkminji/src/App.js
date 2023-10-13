import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts/Fonts.css";
import EditProfile from "./components/EditProfile";
import MyPage from "./components/MyPage";
import { useState } from "react";

function App() {
  const data = {
    name: "__min.zzi",
    profile_img: "../img/torrr.jpg",
    intro: "서핑데이 기대된다!",
    web_link: "",
    email: "",
    sex: "",
  };

  const [userData, setUserData] = useState(data);

  const modifyUSerData = (e, field) => {
    const newValue = e.target.value;

    const newUserData = {
      ...userData,
      [field]: newValue,
    };
    setUserData(newUserData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage data={userData} />} />
        <Route
          path="/edit_profile"
          element={<EditProfile data={userData} modifydata={modifyUSerData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
