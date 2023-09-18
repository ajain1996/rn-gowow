import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setContextInAsync = async (contextData) => {
  const masterObj = AsyncStorage.setItem(
    "masterObj",
    JSON.stringify(contextData.masterObj)
  );
  const isLogin = AsyncStorage.setItem(
    "isLogin",
    JSON.stringify(contextData.isLogin)
  );

  await Promise.all([masterObj, isLogin]);
};

export const getContextData = async (contextData) => {
  console.log("context data in setasync ===>", contextData);
  AsyncStorage.multiGet(["masterObj", "isLogin"]).then((data) => {
    console.log("Context data ===>", data);
    {
      JSON.parse(data[0][1]) &&
        contextData.setMasterObj(JSON.parse(data[0][1]));
    }
    {
      JSON.parse(data[1][1]) && contextData.setIsLogin(JSON.parse(data[1][1]));
    }
  });
};
