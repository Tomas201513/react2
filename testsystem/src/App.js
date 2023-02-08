import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import MiniDrawer from "./components/demo";
import  Searchbar  from "./components/Searchbar";
import Mp from './components/mappp'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";


const App = () => {
    const [theme, colorMode] = useMode();

  return (
 <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <MiniDrawer />
      {/* <Mp/> */}
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
 