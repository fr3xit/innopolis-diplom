import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as getID } from 'uuid';

import {
	expandProductData,
	addProductBasket,
	removeProductBasket,
	toggleAddedProduct,
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

	const genButtonUiConfig = function (item, isAdded) {
		return {
			funcButtonUI: () => {
				dispatch(addProductBasket(item.productId));
			},
			toggleButtonUI: {
				status: isAdded === true ? true : false,
				mods: [classNameButtonUi('button_check')],
				funcRemove: () => dispatch(removeProductBasket(item.productId)),
				funcToggle: () => dispatch(toggleAddedProduct(item.productId)),
			},
		};
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
						buttonUiConfig={genButtonUiConfig(item, item.added)}
					/>
				);
			})}
		</div>
	);
};

export default ProductsList;
