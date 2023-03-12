import { configureStore } from '@reduxjs/toolkit';

import basketSlice from './slices/basket/basket';

export const store = configureStore({
	reducer: {
		basket: basketSlice,
	},
});
