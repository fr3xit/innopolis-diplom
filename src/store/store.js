import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/product/product';

export const store = configureStore({
	reducer: {
		product: productSlice,
	},
});
