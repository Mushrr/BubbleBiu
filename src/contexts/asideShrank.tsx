import { createContext, useState } from "react";
import type { FC, PropsWithChildren } from "react";

const AsideShrankContext = createContext({
  shrank: false,
  toggleShrank: () => {
    console.log("setShrank is not implemented");
  },
});

type AsideShrankProps = {
    shrank: boolean;
}

const AsideShrankProvider: FC<PropsWithChildren<AsideShrankProps>> = (props) => {
  const [shrank, setShrank] = useState(props.shrank);
  const toggleShrank = () => {
    setShrank(!shrank);
  };
  return (
    <AsideShrankContext.Provider value={{shrank: shrank, toggleShrank: toggleShrank}}>
      {props.children}
    </AsideShrankContext.Provider>
  );
};

export { AsideShrankContext };
export default AsideShrankProvider;