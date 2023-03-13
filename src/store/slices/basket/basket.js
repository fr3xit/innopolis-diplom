import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const productList = require('@data/productsData.json');

const initState = {
	amount: 0,
	sum: 0,
	list: [...productList],
};

const calcBasket = function (state) {
	state.sum = state.list.reduce((sum, item) => {
		state.amount++;
		return sum + Number(item.price.replace(/\s/g, ''));
	}, 0);
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState: initState,
	reducers: {
		addProduct: (state, action) => {
			calcBasket(state);
			// state.list.push(action.payload);
		},

		removeProduct: (state, action) => {
			const index = state.list.forEach((item, index) => {
				if (item.id === action.payload) {
					return index;
				}
			});

			state.list.splice(index, 1);
			calcBasket(state);
		},
	},
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
