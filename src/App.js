import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(null);

  function Increment() {
    return setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  useEffect(
    function () {
      clearTimeout(pause);
      setPause(Increment());
    },
    [count]
  );

  function startHandler() {
    clearTimeout(pause);
    setPause();
    Increment();
  }

  return (
    <div className="App">
      <h2>Counter:{count}</h2>
      <button
        type="button"
        onClick={function () {
          startHandler();
        }}
      >
        Start
      </button>
      <button
        type="button"
        onClick={function () {
          clearTimeout(pause);
        }}
      >
        Stop
      </button>
    </div>
  );
}
