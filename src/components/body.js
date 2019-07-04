import React, { useState } from "react";

function Body() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hola {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default Body;
