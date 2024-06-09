import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import theme from "../src/utils/theme";
import "@fontsource/roboto";

ReactDOM.render(
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
         <App />
      </Router>
   </ThemeProvider>,
   document.getElementById("root")
);
