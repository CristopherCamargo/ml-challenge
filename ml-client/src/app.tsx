import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store } from "~/store";
import MLTheme from "~/theme";
import AppRoutes from "~/router";
import GlobalStyles from "./theme/global";
import { history } from "~/router";

import "normalize.css";

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} />
    <GlobalStyles />
    <ThemeProvider theme={MLTheme}>
      <AppRoutes />
    </ThemeProvider>
  </Provider>
);

export default App;
