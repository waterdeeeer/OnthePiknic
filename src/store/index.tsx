import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import dbReducer from './db/reducer';

const reducers = combineReducers({
  db: dbReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;

export type AsyncThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
