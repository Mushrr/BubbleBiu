import { PropsWithChildren, createContext, useState } from "react";
import type { FC } from "react";

const NavTitleContext = createContext({
  title: "",
  setTitle: (title: string) => {
    console.log("setTitle is not implemented", title);
  },
});

type NavTitleProps = {
    title: string;
}

const NavTitleProvider: FC<PropsWithChildren<NavTitleProps>> = (props) => {
  const [curTitle, setTitle] = useState(props.title);
  return (
    <NavTitleContext.Provider value={{title: curTitle, setTitle}}>
      {props.children}
    </NavTitleContext.Provider>
  );
};

export { NavTitleContext };
export default NavTitleProvider;