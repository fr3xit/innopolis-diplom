import { createSlice } from '@reduxjs/toolkit';

const productList = require('@data/productsData.json');

const initState = { allProduct: productList };

export const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {},
});

export default productSlice.reducer;
