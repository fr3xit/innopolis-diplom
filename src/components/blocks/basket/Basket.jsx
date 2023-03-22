import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import { declensionWord } from '@tools/restTools.js';
import ToPay from '@modules/toPay/ToPay';
import stylesBasket from './Basket.module.scss';

const classNameBasket = moduleClassNameBind.bind(stylesBasket);

const Basket = function ({ func }) {
	const sum = useSelector(state => state.product.basket.sum);
	const product = useSelector(state => state.product.basket.amount);

	const declensionProduct = declensionWord(product, [
		'товар',
		'товара',
		'товаров',
	]);

	return (
		<div className={classNameBasket('basket')} onClick={func ? func : null}>
			<div className={classNameBasket('basket__inner')}>
				<div className={classNameBasket('basket__product')}>
					{`${product} ${declensionProduct}`}
				</div>
				<div className={classNameBasket('basket__sum')}>
					<span>на сумму </span>
					<ToPay sum={sum} />
				</div>
			</div>
		</div>
	);
};

export default Basket;
