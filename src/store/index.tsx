import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import dbReducer, { DBState } from "./db/reducer";
import listviewReducer, { ListviewState } from "./listview/reducer";
import navReducer, { NavbarState } from "./navbar/reducer";

const reducers = combineReducers({
  db: dbReducer,
  listview: listviewReducer,
  navbar: navReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

export type RootState = {
  db: DBState;
  listview: ListviewState;
  navbar: NavbarState;
};

export type AsyncThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
