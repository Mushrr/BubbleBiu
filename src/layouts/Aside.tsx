import { AsideShrankContext } from "@/contexts/asideShrank";
import { useContext } from "react";

export default function Aside() {

  const { shrank, toggleShrank } = useContext(AsideShrankContext);
  const iconClasses = "hover:bg-gray-2 rounded-xl h-8 flex justify-center items-center cursor-pointer";
  const otherClasses = " cursor-pointer w-6";
  const asideIcon = shrank ? "i-carbon-side-panel-open" : "i-carbon-side-panel-close";

  return <aside>
    <div className="w-8 flex-col flex">
      <div className={iconClasses}>
        <div className={asideIcon + otherClasses} onClick={toggleShrank} />
      </div>
      <div>
        <div className={iconClasses}>
          <div className="i-icon-park-plus" />
        </div>
        <div className={iconClasses}>
          <div className="i-icon-park-minus" />
        </div>
      </div>
    </div>
  </aside>;
}