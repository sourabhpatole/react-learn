import React, { useId } from "react";

const Checkbox = () => {
  const newid = useId();
  return (
    <div>
      <input type="checkbox" id={newid} />
      <label htmlFor={newid}>Accept Terms</label>
    </div>
  );
};

export default Checkbox;
