import React, { useState, createContext } from "react";
import { COLORS } from "../Common/Colors";

const GlobalContext = createContext({});

const GlobalProvider = (props) => {
  const [masterObj, setMasterObj] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState(COLORS.secondaryLight);
  const [isUpperStatusEnable, setIsUpperStatusEnable] = useState(true);

  const resetState = () => {
    setMasterObj({});
    setIsLogin(false);
    setStatusBarColor(COLORS.secondaryLight);
    setIsUpperStatusEnable(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        masterObj,
        setMasterObj,
        isLogin,
        setIsLogin,
        statusBarColor,
        setStatusBarColor,
        isUpperStatusEnable,
        setIsUpperStatusEnable,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
