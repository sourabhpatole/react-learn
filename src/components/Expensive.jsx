import React, { useState, useTransition } from "react";

const Expensive = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const [isPending, startTransition] = useTransition();

  const runExpensive = (value) => {
    const calculatedResult = [];
    for (let i = 0; i < 9999999; i++) {}
    // simulate heavy work by running many calculation
    for (let i = 0; i < 20000; i++) {
      const result = i * parseInt(value || "0", 10);
      if (i % 1000 === 0) {
        calculatedResult.push(result);
      }
    }
    return calculatedResult;
  };
  const handleInputChange = (e) => {
    // update input immediatly (high priority)
    const newValue = e.target.value;
    setInput(newValue);
    // defer the expensive calculation (low priority)
    startTransition(() => {
      const calculatedResults = runExpensive(newValue);
      setResult(calculatedResults);
    });
  };
  return (
    <>
      <div>
        <label htmlFor="">Enter a number</label>
        <input type="number" value={input} onChange={handleInputChange} />
      </div>
      {isPending ? (
        "Loading..."
      ) : (
        <div className="">
          <h3>Result</h3>
          <ul>
            {result.map((resul, index) => (
              <li key={index}>
                {index * 1000}x{input}={resul}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Expensive;
