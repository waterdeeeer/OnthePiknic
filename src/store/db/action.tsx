import { Action } from 'redux';

import {
  DB_ACTION_TYPE,
  AsyncThunkAction,
  Product,
  ProductModel,
} from '../../types';

import API from '../../api';

export interface DB_ACTION extends Action {
  type: DB_ACTION_TYPE;
  payload?: {};
}

const api = API.getInstance();

const getLadningPageProducts = (products: Product[]): DB_ACTION => {
  return {
    type: DB_ACTION_TYPE.GET_LANDING_PAGE_PRODUCTS,
    payload: products,
  };
};

export const getLandingPageProductsAsync = (): AsyncThunkAction => async (
  dispatch
) => {
  const response = await api.getProducts();
  const products: Product[] = [];
  response.data.forEach((data: ProductModel) => {
    products.push(new Product(data));
  });
  return dispatch(getLadningPageProducts(products));
};
