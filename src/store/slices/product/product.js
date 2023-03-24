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

			const indexProductToUpdate = allProduct.findIndex(
				item => item.productId === id
			);

			if (indexProductToUpdate !== -1) {
				state.allProduct[indexProductToUpdate] = {
					...updatedProductData,
				};
			}
		},

		toggleAddedProduct: (state, action) => {
			const id = action.payload;
			const allProduct = state.allProduct;
			const indexProduct = allProduct.findIndex(item => item.productId === id);
			const currentProduct = allProduct[indexProduct];

			if (indexProduct !== -1 && currentProduct.added) {
				currentProduct.added = !currentProduct.added;
			} else if (indexProduct !== -1) {
				currentProduct.added = true;
			}
		},

		// Basket

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

		clearBasket: state => {
			state.basket.list = [];
			updateInfoBasket(state);
		},
	},
});

export const {
	expandProductData,
	toggleAddedProduct,
	addProductBasket,
	removeProductBasket,
	clearBasket,
} = productSlice.actions;

export default productSlice.reducer;
