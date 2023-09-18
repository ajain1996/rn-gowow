import React from "react";
import { GlobalProvider } from "./src/Globals/globalProvider";
import FirstScreen from "./src/FirstScreen";

const App = () => {
  return (
    <GlobalProvider>
      <FirstScreen />
    </GlobalProvider>
  );
};

export default App;
