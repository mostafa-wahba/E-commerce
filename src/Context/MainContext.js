import { createContext, useState } from "react";
export const MainContext = createContext();
export default function MainContextProvider(props) {
  //   Search input
  const [test, setTest] = useState(false);
  const [userToken, setUserToken] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  return (
    <MainContext.Provider
      value={{
        test,
        setTest,
        userToken,
        setUserToken,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
