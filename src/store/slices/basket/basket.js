import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const productList = require('@data/productsData.json');

const initState = {
	list: [...productList],
	amount: 5000,
	sum: 90000,
};

const calcBasket = function (state) {
	state.sum = state.list.reduce((sum, item) => {
		state.amount++;
		return sum + Number(item.price.replace(/\s/g, ''));
	}, 0);
};
// console.log(state.list);

export const basketSlice = createSlice({
	name: 'basket',
	initialState: initState,
	reducers: {
		addProduct: (state, action) => {
			calcBasket(state);
			// state.list.push(action.payload);
		},

		addMore: (state, action) => {
			calcBasket(state);
		},

		removeProduct: (state, action) => {
			// const index = state.list.forEach((item, index) => {
			// 	if (item.id === action.payload) {
			// 		return index;
			// 	}
			// });

			// state.list.splice(index, 1);
			state.list = state.list.filter(item => item.id !== action.payload);

			calcBasket(state);
		},
	},
});

export const { addProduct, addMore, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
