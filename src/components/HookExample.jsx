import { useEffect, useState } from "react";
import DataFetcher from "./DataFetcher";

const HookExample = () => {
  const [toggle, setToggle] = useState(false);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log("Component is mounted!!");

    return () => {
      console.log("Component is unmounted");
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <h1>Hook example</h1>
      <p>Second elapsed : {seconds}</p>
      {toggle && <DataFetcher />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default HookExample;
