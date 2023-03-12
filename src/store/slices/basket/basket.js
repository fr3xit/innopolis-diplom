import { createSlice } from '@reduxjs/toolkit';
const initState = [];

export const basketSlice = createSlice({
	name: 'basket',
	initialState: initState,
	reducers: {
		addProduct: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
