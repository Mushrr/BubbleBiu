import { useState, useEffect } from "react";

export default function Footer() {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const tick = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  return <div className="fixed bottom-0 left-0 right-0 w-full">
    <div className="flex flex-row h-8 bg-gray-1 justify-stretch">
      <div className="drag flex-1 text-center font-mono vertical-bottom">Footer</div>
      <div className="text-center font-mono vertical-bottom pr-2">{currentTime}</div>
    </div>
  </div>;
}