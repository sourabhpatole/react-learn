import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        placeholder="Enter something"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>
        You Typed : <strong>{inputVal}</strong>
      </p>
    </div>
  );
}

export default App;
