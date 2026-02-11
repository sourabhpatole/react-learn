import { useEffect, useState } from "react";
import DataFetcher from "./DataFetcher";

const HookExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [toggle, setToggle] = useState(false);
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
      <button onClick={() => setToggle(!toggle)}>New Toggle</button>
      {toggle ? <DataFetcher /> : <></>}
    </div>
  );
};

export default HookExample;
