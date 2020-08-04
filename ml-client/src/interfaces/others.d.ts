import { ThunkAction } from "redux-thunk";

declare global {
  type AsyncAction = ThunkAction<
    Promise<void>,
    ReduxStore,
    ThunksArgs,
    AnyAction
  >;

  type AsyncDispatch = AsyncDispatch;
  interface RouteStruct {
    path: string;
    component: JSX.Element;
  }
}
