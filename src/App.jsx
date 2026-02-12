import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HookExample from "./components/HookExample";
import ShoppingCart from "./components/ShoppingCart";
import FancyInput from "./components/FancyInput";
import Checkbox from "./components/Checkbox";
import Expensive from "./components/Expensive";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoList from "./components/TodoList";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const fancyInputRef = useRef();
  // useEffect(() => {
  //   console.log("rerendered!!");
  // }, [count]);
  // useEffect(() => {
  //   inputRef.current && inputRef.current.focus();
  // }, []);

  return (
    <div>
      <TodoList />
      <ThemeSwitcher />
      <br />
      <h1>This is UseEffect Hook</h1>
      <DataFetcher />
      <Checkbox />
      {/* <Expensive /> */}
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
