import mcnBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Basket.module.scss';

const SCN = mcnBind.bind(styles);

const Basket = function ({ func }) {
	const sum = useSelector(state => state.basket.sum);
	const product = useSelector(state => state.basket.amount);

	return (
		<div className={SCN('basket')} onClick={func ? func : null}>
			<div className={SCN('basket__inner')}>
				<div className={SCN('basket__product')}>{`${product} товара`}</div>
				<div className={SCN('basket__sum')}>{`на сумму ${sum} ₽`}</div>
			</div>
		</div>
	);
};

export default Basket;
