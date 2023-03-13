import { createSlice } from '@reduxjs/toolkit';
const initState = {
	amount: 0,
	total: 0,
	list: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState: initState,
	reducers: {
		addProduct: (state, action) => {
			state.list.push(action.payload);
		},
	},
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
