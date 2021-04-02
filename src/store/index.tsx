import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import dbReducer from './db/reducer';
import listviewReducer from './listview/reducer';

const reducers = combineReducers({
  db: dbReducer,
  listview: listviewReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

export type RootState = ReturnType<typeof reducers>;

export type AsyncThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
