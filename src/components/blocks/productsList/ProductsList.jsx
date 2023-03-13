import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import Card from '@modules/card/Card.jsx';

import stylesProductsList from './ProductsList.module.scss';
import stylesCard from '@modules/card/Card.module.scss';

const classNameProductsList = moduleClassNameBind.bind(stylesProductsList);
const classNameCard = moduleClassNameBind.bind(stylesCard);

const ProductsList = function () {
	const data = useSelector(state => state.product.allProduct);

	return (
		<div className={classNameProductsList('products-list')}>
			{data.map(item => (
				<Card
					key={item.id}
					mods={[
						classNameProductsList('products-list__item'),
						classNameCard('card_vertically'),
					]}
					item={item}
				/>
			))}
		</div>
	);
};

export default ProductsList;
