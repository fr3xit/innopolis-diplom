import { TransitionGroup, CSSTransition } from 'react-transition-group';
import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	removeProductBasket,
	toggleAddedProduct,
} from '@store/slices/product/product';

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
	const go = useNavigate();

	const genButtonUiConfig = item => () => {
		dispatch(toggleAddedProduct(item.productId));
		dispatch(removeProductBasket(item.basketItemId));
	};

	return (
		<div className={classNameBasketList('basket-list')}>
			<TransitionGroup component={null}>
				{data.map(item => (
					<CSSTransition
						key={item.basketItemId}
						timeout={300}
						classNames={{
							exitActive: classNameBasketList('item__remove'),
						}}>
						<Card
							funcCard={() => go(`/product/${item.productId}`)}
							mods={[
								classNameBasketList('basket-list__item'),
								classNameCard('card_horizontal'),
							]}
							item={item}
							buttonUiConfig={{
								funcButtonUI: genButtonUiConfig(item),
								modsButtonUI: [classNameButtonUi('button_close')],
							}}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default BasketList;
