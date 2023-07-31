import { useState } from "react";

export default function CanvasWrapper() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    console.log("设置了状态", count);
    setCount(count + 1);
  };
  return <div>
    <h1>当前数值为{count}</h1>
    <button onClick={handleClick}>点击</button>
  </div>;
}