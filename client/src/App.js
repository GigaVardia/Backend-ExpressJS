import React from 'react';
import MainRouter from "./MainRouter";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";
import "./scss/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
