import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((cc) => cc + 1);
  };

  return (
    <>
      <button className="" onClick={increment}></button>
      <p>Count : {count} </p>
    </>
  );
}

export default Counter;
