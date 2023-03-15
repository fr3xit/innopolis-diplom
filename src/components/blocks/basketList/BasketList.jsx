import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as getID } from 'uuid';

import { removeProductBasket } from '@store/slices/product/product';
import Card from '@modules/card/Card.jsx';

import stylesBasketList from './BasketList.module.scss';
import stylesCard from '@modules/card/Card.module.scss';
import stylesButtonUi from '@modules/button_ui/Button_ui.module.scss';

const classNameBasketList = moduleClassNameBind.bind(stylesBasketList);
const classNameCard = moduleClassNameBind.bind(stylesCard);
const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const BasketList = function () {
	const dispatch = useDispatch();
	const data = useSelector(state => state.product.basket.list);

	return (
		<div className={classNameBasketList('basket-list')}>
			{data.map(item => {
				const funcButtonUI = () =>
					dispatch(removeProductBasket(item.productId));
				return (
					<Card
						key={getID()}
						mods={[
							classNameBasketList('basket-list__item'),
							classNameCard('card_horizontal'),
						]}
						item={item}
						buttonUiConfig={{
							funcButtonUI,
							modsButtonUI: [classNameButtonUi('button_close')],
						}}
					/>
				);
			})}
		</div>
	);
};

export default BasketList;
