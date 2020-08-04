import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { AppReducers } from "~/store/reducers";
import { history } from "~/router";

import ProductsMiddleware from "~/store/products/middleware";
import SearchMiddleware from "~/store/search/middleware";

const middlewares = [
  thunk,
  routerMiddleware(history),
  ProductsMiddleware,
  SearchMiddleware
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  AppReducers(history),
  compose(applyMiddleware(...middlewares))
);
