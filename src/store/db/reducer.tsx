import { DB_ACTION, DB_ACTION_TYPE, Product } from '../../types';

export interface DBState {
  product: Product[];
}
const initialState: DBState = {
  product: [],
};

const dbReducer = (state: DBState = initialState, action: DB_ACTION) => {
  switch (action.type) {
    case DB_ACTION_TYPE.GET_LANDING_PAGE_PRODUCTS:
      const newState = state;
      newState.product = action.payload as Product[];
      return newState;
    default:
      return state;
  }
};

export default dbReducer;
