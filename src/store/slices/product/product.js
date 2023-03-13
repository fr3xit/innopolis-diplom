import { createSlice } from '@reduxjs/toolkit';

const productList = require('@data/productsData.json');

const initState = {
	allProduct: productList,
	basket: {
		list: [...productList],
		amount: 0,
		sum: 0,
	},
};

export const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {},
});

export default productSlice.reducer;
