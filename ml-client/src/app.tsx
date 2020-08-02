import React from "react";
import { ThemeProvider } from "styled-components";
import MLTheme from "~/theme";
import AppRoutes from "~/router";
import GlobalStyles from "./theme/global";

import "normalize.css";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={MLTheme}>
      <AppRoutes />
    </ThemeProvider>
  </>
);

export default App;
