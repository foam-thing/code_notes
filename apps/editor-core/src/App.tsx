import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tiptap from "./components/Editor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Tiptap />
      </section>
    </div>
  );
}

export default App;
