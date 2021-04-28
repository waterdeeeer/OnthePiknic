import {Action} from 'redux';

import {
	DB_ACTION_TYPE,
	AsyncThunkAction,
	Product,
	ProductModel,
} from '../../types';

import API from '../../api';

export interface DB_ACTION<T> extends Action {
	type: DB_ACTION_TYPE;
	payload?: T;
}

const api = API.getInstance();

const getLadningPageProducts = (products: Product[]): DB_ACTION<Product[]> => {
	return {
		type: DB_ACTION_TYPE.GET_LANDING_PAGE_PRODUCTS,
		payload: products,
	};
};

export const getLandingPageProductsAsync = (): AsyncThunkAction => async (
	dispatch
) => {
	const response = await api.product.getTopFive();
	const products: Product[] = [];
	response.data.forEach((data: ProductModel) => {
		products.push(new Product(data));
	});
	return dispatch(getLadningPageProducts(products));
};
