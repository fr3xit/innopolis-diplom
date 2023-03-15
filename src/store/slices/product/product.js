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
		addProductBasket: (state, action) => {
			state.basket.list.push(getProductBasket(state, action));

			updateInfoBasket(state);
		},

		removeProductBasket: (state, action) => {
			state.basket.list = state.basket.list.filter(
				item => item.basketItemId !== action.payload
			);

			updateInfoBasket(state);
		},
	},
});

export const { addProductBasket, removeProductBasket } = productSlice.actions;

export default productSlice.reducer;
