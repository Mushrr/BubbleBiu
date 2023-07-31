import { useContext } from "react";
import { AsideShrankContext } from "@/contexts/asideShrank";

export default function SubAside() {
  const shrank = useContext(AsideShrankContext).shrank;
  const otherClasses = "bg-gray-1 h-screen text-nowrap text-truncate overflow-hidden transition-all duration-200 ease-in-out ";
  const sideClasses = otherClasses + (shrank ? "w-0" : "w-2/6");

  return <aside className={sideClasses}>
    <div className="h-8 bg-gray-1 drag" />
    <ol>
      <li>你猜怎么招？</li>
    </ol>
  </aside>;
}