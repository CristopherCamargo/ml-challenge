import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Loading } from "~/components/atoms";

const HomeHOC = lazy(() => import("~/components/pages/home/redux-hoc"));
const DetailHOC = lazy(() => import("~/components/pages/detail/redux-hoc"));

export const history = createBrowserHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomeHOC} />
          <Route exact path="/items" component={HomeHOC} />
          <Route exact path="/items/:id" component={DetailHOC} />
        </Suspense>
        <Redirect to="/oops" />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
