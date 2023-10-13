import MainBar from "./MainBar";
import Profile from "./Profile";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function MyPage(props) {
  return (
    <div>
      <MainBar />
      <Profile data={props.data}></Profile>
      <Post></Post>
    </div>
  );
}
