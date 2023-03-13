import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const productList = require('@data/productsData.json');

const initState = {
	amount: 0,
	sum: 0,
	list: [...productList],
};

function GetState(state) {
	const data = useSelector(state => state.product);
	console.log(data);
	// console.log(state.product);
	// return state.product;
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState: initState,
	reducers: {
		addProduct: (state, action) => {
			state.sum = state.list.reduce((sum, item) => {
				state.amount++;
				return sum + Number(item.price.replace(/\s/g, ''));
			}, 0);

			// state.list.push(action.payload);
		},
	},
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
