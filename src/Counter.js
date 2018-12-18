import React from "react";
import CurrentCount from "./CurrentCount";
import CounterContext from "./CounterContext";

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={count}>
      <div>
        <CurrentCount />
        <button type="button" onClick={() => setCount(count + 1)}>
          increment
        </button>
      </div>
    </CounterContext.Provider>
  );
}



export default Counter;
