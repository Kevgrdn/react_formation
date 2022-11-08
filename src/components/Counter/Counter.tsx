import React, {useState} from "react";

type buttonProps = {
  onClick: any;
  children: string;
};
function Button({onClick, children}: buttonProps) {
  return <button onClick={onClick}>{children}</button>;
}

function Title({title}: {title: string}) {
  return <h1>{title}</h1>;
}

const MemoizedTitle = React.memo(Title);

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((cc) => cc + 1);
  };

  return (
    <>
      <MemoizedTitle title="Counter component" />
      <p>Count : {count} </p>

      <Button onClick={increment}> Incrémenter</Button>
    </>
  );
}

export default Counter;
