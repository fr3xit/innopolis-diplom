import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

//
import { useDispatch } from 'react-redux';
import {
	addProductBasket,
	removeProductBasket,
} from '../../../store/slices/product/product';
//

import Card from '@modules/card/Card.jsx';

import stylesProductsList from './ProductsList.module.scss';
import stylesCard from '@modules/card/Card.module.scss';

const classNameProductsList = moduleClassNameBind.bind(stylesProductsList);
const classNameCard = moduleClassNameBind.bind(stylesCard);

const ProductsList = function () {
	//
	const dispatch = useDispatch();

	//
	const data = useSelector(state => state.product.allProduct);

	return (
		<div className={classNameProductsList('products-list')}>
			{data.map(item => {
				//
				const myFunc = () => dispatch(addProductBasket(item.id));
				//
				return (
					<Card
						key={item.id}
						mods={[
							classNameProductsList('products-list__item'),
							classNameCard('card_vertically'),
						]}
						item={item}
						funcButtonUI={myFunc}
					/>
				);
			})}
		</div>
	);
};

export default ProductsList;
