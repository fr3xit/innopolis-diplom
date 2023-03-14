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
					state.basket.list.find(item => item.id === action.payload).price
				);
		},

		removeProductBasket: (state, action) => {
			state.basket.sum =
				state.basket.sum -
				Number(
					state.basket.list.find(item => item.id === action.payload).price
				);

			// state.basket.list = state.basket.list.filter(
			// 	item => item.id !== action.payload
			// );

			state.basket.list.splice(
				state.basket.list.find(item => item.id === action.payload),
				1
			);

			state.basket.amount--;
		},
	},
});

export const { addProductBasket, removeProductBasket } = productSlice.actions;

export default productSlice.reducer;
