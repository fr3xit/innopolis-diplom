import { v4 as getID } from 'uuid';

export const updateInfoBasket = function (state) {
	state.basket.amount = state.basket.list.length;

	state.basket.sum = state.basket.list.reduce(
		(sum, product) => sum + product.price,
		0
	);
};

export const getProductBasket = function (state, action) {
	const newData = {
		basketItemId: getID(),
	};

	let product = state.allProduct.find(
		item => item.productId === action.payload
	);

	product = { ...product, ...newData };

	return product;
};
