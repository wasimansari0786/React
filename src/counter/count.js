import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCount = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement" && count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="main_div">
      <div className="sub_div">
        <h1>Counter: {count}</h1>
        <div className="btn">
          <button onClick={() => handleCount("increment")}>Increment</button>
          <button onClick={() => handleCount("decrement")}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Count;
