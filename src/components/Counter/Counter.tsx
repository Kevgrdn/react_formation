import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((cc) => cc + 1);
  };

  return (
    <>
      <button className="flex justify-center bg-black text-white p-3 rounded-xl" onClick={increment}></button>
      <p>Count : {count} </p>
    </>
  );
}

export default Counter;
