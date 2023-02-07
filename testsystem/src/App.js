import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import MiniDrawer from "./components/demo";
import  Searchbar  from "./components/Searchbar";
import Mp from './components/mappp'

const App = () => {
  return (
    <div>
      <MiniDrawer />
      {/* <Mp/> */}
       
    </div>
  );
};

export default App;
 