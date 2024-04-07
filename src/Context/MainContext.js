import { createContext, useState } from "react";
export const MainContext = createContext();
export default function MainContextProvider(props) {
 //   Search input
  const [test, setTest] = useState(false);


  return (
    <MainContext.Provider
      value={{
        test,
        setTest
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
