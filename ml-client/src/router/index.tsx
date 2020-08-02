import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes";

export const history = createBrowserHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to="/oops" />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
