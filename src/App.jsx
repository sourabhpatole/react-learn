import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookExample from "./components/HookExample";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [toggle, setToggle] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("rerendered!!");
  }, [count]);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>This is UseEffect Hook</h1>

      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        ref={inputRef}
      />
      <p>{count}</p>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      {/* {toggle && <HookExample />} */}
      <button onClick={() => setToggle(!toggle)}>ToggleBtn</button>
      <ShoppingCart />
    </div>
  );
}

export default App;
