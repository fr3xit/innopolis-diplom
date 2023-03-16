import { createSlice } from '@reduxjs/toolkit';

import { updateInfoBasket, getProductBasket } from './productTools';

const productList = require('@data/productsData.json');

const initState = {
	allProduct: productList,
	basket: {
		list: [],
		amount: 0,
		sum: 0,
	},
};

export const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {
		expandProductData: (state, action) => {
			// state.allProduct = [
			// 	...(state.allProduct[action.payload.id] = {
			// 		...state.allProduct[action.payload.id],
			// 		...action.payload.data,
			// 	}),
			// ];
		},

		addProductBasket: (state, action) => {
			state.basket.list.push(getProductBasket(state, action));

			updateInfoBasket(state);
		},

		removeProductBasket: (state, action) => {
			console.log(action.payload);
			state.basket.list = state.basket.list.filter(
				item => item.productId !== action.payload
			);

			updateInfoBasket(state);
		},
	},
});

export const { expandProductData, addProductBasket, removeProductBasket } =
	productSlice.actions;

export default productSlice.reducer;
