import { DB_ACTION, DB_ACTION_TYPE, Product } from "../../types";

export interface DBState {
  top_5?: Product[];
  all?: Product[];
  id?: number;
}
const initialState: DBState = {
  top_5: [],
  all: [],
  id: 3,
};

const dbReducer = (
  state: DBState = initialState,
  action: DB_ACTION<Product[] | number>
) => {
  switch (action.type) {
    case DB_ACTION_TYPE.GET_LANDING_PAGE_PRODUCTS:
      if (state.top_5 !== action.payload)
        return {
          ...state,
          top_5: action.payload,
        };
      else {
        return state;
      }
    case DB_ACTION_TYPE.GET_ALL_PRODUCTS:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

export default dbReducer;
