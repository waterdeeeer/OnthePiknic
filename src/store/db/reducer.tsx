import { DB_ACTION, DB_ACTION_TYPE, Product } from '../../types';

export interface DBState {
  product: Product[];
  id: Number;
}
const initialState: DBState = {
  product: [],
  id: 3,
};

const dbReducer = (
  state: DBState = initialState,
  action: DB_ACTION<Product[] | Number>
) => {
  switch (action.type) {
    case DB_ACTION_TYPE.GET_LANDING_PAGE_PRODUCTS:
      if (state.product !== action.payload)
        return {
          ...state,
          product: action.payload,
        };
      else {
        return state;
      }
    default:
      return state;
  }
};

export default dbReducer;
