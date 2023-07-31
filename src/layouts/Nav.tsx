import { NavTitleContext } from "@/contexts/navTitle";
import { useContext } from "react";

export default function Nav() {
  const apis = {
    minWindow: () => window.ipc.send("minWindow"),
    maxWindow: () => window.ipc.send("maxWindow"),
    quitWindpw: () => window.ipc.send("quitWindow"),
  };

  const title = useContext(NavTitleContext).title;

  const hoverClasses = `hover:bg-gray-2 flex-1 flex items-center justify-center
    h-full cursor-pointer transition-colors duration-200 ease-in-out`;
  return <>
    <div className="flex flex-row h-8 bg-gray-1 justify-stretch">
      <div className="drag flex-1 text-center font-mono vertical-bottom">{title}</div>
      <div className="w-120px flex flex-row items-center justify-stretch">
        <div className={hoverClasses} onClick={apis.minWindow}><div className="i-icon-park-minus"></div></div>
        <div className={hoverClasses} onClick={apis.maxWindow}><div className="i-carbon-maximize"></div></div>
        <div className={hoverClasses} onClick={apis.quitWindpw}><div className="i-carbon-close"></div></div>
      </div>
    </div>
  </>;
}