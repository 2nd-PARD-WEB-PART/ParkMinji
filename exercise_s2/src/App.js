import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const storeInput = (event) => {
    setText(event.target.value);
  };

  const updateTitle = (event) => {
    event.preventDefault();
    document.title = text;
  };

  return (
    <div>
      <form>
        <input type="type" name="name" onChange={storeInput} />
        <button onClick={updateTitle}>submit</button>
      </form>
    </div>
  );
}

export default App;
