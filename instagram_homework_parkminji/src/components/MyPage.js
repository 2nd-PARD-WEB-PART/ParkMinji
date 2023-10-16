import MainBar from "./MainBar";
import Profile from "./Profile";
import Post from "./Post";

export default function MyPage(props) {
  return (
    <div>
      <MainBar data={props.data} />
      <Profile data={props.data}></Profile>
      <Post data={props.data}></Post>
    </div>
  );
}
