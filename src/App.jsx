import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Property Project Landing Page</h1>
        <Button id="test-btn" title="click" />
      </div>
    </>
  );
}

export default App;
