import { createSlice } from '@reduxjs/toolkit';

const productList = require('@data/productsData.json');

const initState = {
	allProduct: productList,
	basket: {
		list: [],
		amount: 0,
		sum: 0,
	},
};

const calcBasket = function (state) {
	state.basket.sum = state.basket.list.reduce((sum, item) => {
		return sum + Number(item.price.replace(/\s/g, ''));
	}, 0);
};

export const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {
		addProductBasket: (state, action) => {
			state.basket.list.push(
				state.allProduct.find(item => item.id === action.payload)
			);

			state.basket.amount++;
			state.basket.sum =
				state.basket.sum +
				Number(
					state.basket.list
						.find(item => item.id === action.payload)
						.price.replace(/\s/g, '')
				);
			// calcBasket(state);
		},

		removeProductBasket: (state, action) => {
			state.basket.sum =
				state.basket.sum -
				Number(
					state.basket.list
						.find(item => item.id === action.payload)
						.price.replace(/\s/g, '')
				);

			state.basket.list = state.basket.list.filter(
				item => item.id !== action.payload
			);

			state.basket.amount--;
		},
	},
});

export const { addProductBasket, removeProductBasket } = productSlice.actions;

export default productSlice.reducer;
