import { useState } from "react";

export function CounterButton({label, children}) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <button onClick={incrementCount}>
      {children} | {label} | {count}
    </button>
  );
}

