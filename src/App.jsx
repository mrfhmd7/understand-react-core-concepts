import { useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";
import Knob from "./components/Knob/Knob";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Device name="Nokia" price="15000"></Device>
      <Device name="SamSong" price="13000"></Device>
      <Watch></Watch>
      <Knob steps="343"></Knob>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
