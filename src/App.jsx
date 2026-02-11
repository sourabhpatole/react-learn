import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookExample from "./components/HookExample";
import ShoppingCart from "./components/ShoppingCart";
import FancyInput from "./components/FancyInput";
import Checkbox from "./components/Checkbox";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const fancyInputRef = useRef();
  useEffect(() => {
    console.log("rerendered!!");
  }, [count]);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>This is UseEffect Hook</h1>
      <Checkbox />
      <p>{count}</p>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      {/* {toggle && <HookExample />} */}
      <button onClick={() => setToggle(!toggle)}>ToggleBtn</button>
      <ShoppingCart />
    </div>
  );
}

export default App;
