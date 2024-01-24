import React  from "react";
import Feed from "./components/Feed";
import { AppContext } from "./Context/contextApi";

const App = () => {
  return (
    <>
      <AppContext>
        <Feed />
      </AppContext>
    </>
  );
};

export default App;
