import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import stylesBasket from './Basket.module.scss';

const classNameBasket = moduleClassNameBind.bind(stylesBasket);

const Basket = function ({ func }) {
	const sum = useSelector(state => state.product.basket.sum);
	const product = useSelector(state => state.product.basket.amount);

	return (
		<div className={classNameBasket('basket')} onClick={func ? func : null}>
			<div className={classNameBasket('basket__inner')}>
				<div className={classNameBasket('basket__product')}>
					{`${product} товара`}
				</div>
				<div
					className={classNameBasket('basket__sum')}>{`на сумму ${sum} ₽`}</div>
			</div>
		</div>
	);
};

export default Basket;
