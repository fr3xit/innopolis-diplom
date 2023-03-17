import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as getID } from 'uuid';

import {
	expandProductData,
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

	const genButtonUiConfig = function (item) {
		return {
			funcButtonUI: () => dispatch(addProductBasket(item.productId)),
			toggleButtonUI: {
				func: () => dispatch(removeProductBasket(item.productId)),
				status: item.added === !true ? true : false,
				funcAdded: value => {
					dispatch(
						expandProductData({ id: item.productId, data: { added: value } })
					);
				},
				mods: [classNameButtonUi('button_check')],
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
						buttonUiConfig={genButtonUiConfig(item)}
					/>
				);
			})}
		</div>
	);
};

export default ProductsList;
