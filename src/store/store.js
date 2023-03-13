import { configureStore } from '@reduxjs/toolkit';

import basketSlice from './slices/basket/basket';
import productSlice from './slices/product/product';

export const store = configureStore({
	reducer: {
		basket: basketSlice,
		product: productSlice,
	},
});
