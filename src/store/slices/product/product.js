import { createSlice } from '@reduxjs/toolkit';

const initState = {
	firstName: '',
	lastName: '',
};

export const productSlice = createSlice({
	name: 'product',
	initialState: initState,
	reducers: {},
});
