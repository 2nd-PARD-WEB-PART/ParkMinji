import "./App.css";
import myimage from "./images/minji.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title_name">[ 함께 성장하길 원하는 개발자 ]</div>
        <div>
          <img className="image" src={myimage} />
        </div>

        <div className="name">박민지</div>

        <div>이번학기 목표 : 매일매일 최선을 다해 살기</div>
        <div>좋아하는 것 : 🐶 👗 💃</div>
      </div>
    </div>
  );
}

export default App;
