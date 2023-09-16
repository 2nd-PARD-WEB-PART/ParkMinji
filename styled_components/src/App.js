import "./App.css";
import Button from "./components/Button";
import DangerButton from "./components/Dangerbutton";

function App() {
  return (
    <div className="App">
      <Button color="green">Default Button</Button>
      <DangerButton>Danger Button</DangerButton>
    </div>
  );
}

export default App;
