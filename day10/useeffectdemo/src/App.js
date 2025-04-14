import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [textBox, setTextBox] = useState("");
  let [valueBox, setValueBox] = useState("");
  useEffect(() => {
    console.log("App component");
  }, [textBox, valueBox]);
  return (
    <form>
      <input
        type="text"
        value={textBox}
        onChange={(e) => setTextBox(e.target.value)}
      />
      <input
        type="text"
        value={valueBox}
        onChange={(e) => setValueBox(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
