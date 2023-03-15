import { useState } from 'react';
import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as getID } from 'uuid';

import {
	addProductBasket,
	removeProductBasket,
} from '@store/slices/product/product';
import Card from '@modules/card/Card.jsx';

import stylesProductsList from './ProductsList.module.scss';
import stylesCard from '@modules/card/Card.module.scss';
import stylesButtonUi from '@modules/button_ui/Button_ui.module.scss';

const classNameProductsList = moduleClassNameBind.bind(stylesProductsList);
const classNameCard = moduleClassNameBind.bind(stylesCard);
const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const ProductsList = function () {
	const dispatch = useDispatch();
	const data = useSelector(state => state.product.allProduct);
	const [selectProduct, setSelectProduct] = useState();

	const genButtonUiConfig = function (item) {
		if (selectProduct === item.productId) {
			return {
				toggleButtonUI: () => setSelectProduct(),
				funcButtonUI: () => dispatch(removeProductBasket(item.productId)),
				modsButtonUI: [classNameButtonUi('button_check')],
			};
		}

		if (selectProduct !== item.productId) {
			return {
				toggleButtonUI: () => setSelectProduct(item.productId),
				funcButtonUI: () => dispatch(addProductBasket(item.productId)),
				modsButtonUI: [],
			};
		}
	};

	return (
		<div className={classNameProductsList('products-list')}>
			{data.map(item => {
				return (
					<Card
						key={getID()}
						mods={[
							classNameProductsList('products-list__item'),
							classNameCard('card_vertically'),
						]}
						item={item}
						buttonUiConfig={genButtonUiConfig(item)}
					/>
				);
			})}
		</div>
	);
};

export default ProductsList;
