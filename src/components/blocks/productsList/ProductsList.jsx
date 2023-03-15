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

const classNameProductsList = moduleClassNameBind.bind(stylesProductsList);
const classNameCard = moduleClassNameBind.bind(stylesCard);

const ProductsList = function () {
	const dispatch = useDispatch();
	const data = useSelector(state => state.product.allProduct);
	const [type, setType] = useState('add');

	return (
		<div className={classNameProductsList('products-list')}>
			{data.map(item => {
				const funcButtonUI = () =>
					type === 'add'
						? dispatch(addProductBasket(item.productId))
						: dispatch(removeProductBasket(item.productId));
				return (
					<Card
						key={getID()}
						mods={[
							classNameProductsList('products-list__item'),
							classNameCard('card_vertically'),
						]}
						item={item}
						buttonUiConfig={{
							funcButtonUI,
							modsButtonUI: [],
						}}
					/>
				);
			})}
		</div>
	);
};

export default ProductsList;
