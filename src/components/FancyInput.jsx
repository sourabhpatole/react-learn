import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ ref }) => {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        ref={inputRef}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>{inputVal}</p>
    </div>
  );
};

export default FancyInput;
