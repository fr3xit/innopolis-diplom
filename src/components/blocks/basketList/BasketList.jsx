import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import Card from '@modules/card/Card.jsx';

import stylesBasketList from './BasketList.module.scss';
import stylesCard from '@modules/card/Card.module.scss';

const classNameBasketList = moduleClassNameBind.bind(stylesBasketList);
const classNameCard = moduleClassNameBind.bind(stylesCard);

const BasketList = function () {
	const data = useSelector(state => state.product.basket.list);

	return (
		<div className={classNameBasketList('basket-list')}>
			{data.map(item => (
				<Card
					key={item.id}
					mods={[
						classNameBasketList('basket-list__item'),
						classNameCard('card_horizontal'),
					]}
					item={item}
				/>
			))}
		</div>
	);
};

export default BasketList;
