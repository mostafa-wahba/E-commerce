import { createContext, useState } from "react";
export const AuthenticationContext = createContext();
export default function AuthenticationContextProvider(props) {
  //   Search input
  const [test, setTest] = useState(false);
  const [userToken, setUserToken] = useState("");

  return (
    <AuthenticationContext.Provider
      value={{
        test,
        setTest,
        userToken,
        setUserToken,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}
