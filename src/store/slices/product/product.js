import { createSlice } from '@reduxjs/toolkit';

import { updateInfoBasket, getProductBasket } from './productTools';

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
		expandProductData: (state, action) => {
			const { id, data: newData } = action.payload;
			const { allProduct } = state;
			const currentProduct = allProduct.find(item => item.productId === id);
			const updatedProductData = {
				...currentProduct,
				...newData,
			};

			const indexToUpdate = allProduct.findIndex(item => item.productId === id);

			if (indexToUpdate !== -1) {
				state.allProduct[indexToUpdate] = {
					...updatedProductData,
				};
			}
			// console.log(updatedProductData);
			// state.allProduct = state.allProduct.map(item => {
			// 	// console.log(item);
			// 	// if (item.productId === action.payload.id) {
			// 	// 	// item = updatedProduct;
			// 	// }
			// });

			// console.log(updatedProduct);

			// state.allProduct = [
			// 	...(state.allProduct[action.payload.id] = {
			// 		...state.allProduct[action.payload.id],
			// 		...action.payload.data,
			// 	}),
			// ];
		},

		toggleAddedProduct: (state, action) => {
			console.log('Я переключатель');
			// state.allProduct = state.allProduct.forEach(
			// 	item => (item.added = !item.added)
			// );
		},

		addProductBasket: (state, action) => {
			state.basket.list.push(getProductBasket(state, action));

			updateInfoBasket(state);
		},

		removeProductBasket: (state, action) => {
			state.basket.list = state.basket.list.filter(item => {
				return !(
					item.basketItemId === action.payload ||
					item.productId === action.payload
				);
			});

			updateInfoBasket(state);
		},
	},
});

export const {
	expandProductData,
	toggleAddedProduct,
	addProductBasket,
	removeProductBasket,
} = productSlice.actions;

export default productSlice.reducer;
