import mcnBind from 'classnames/bind';

import styles from './Basket.module.scss';

const SCN = mcnBind.bind(styles);

const Basket = function () {
	let product = 3;
	let sum = 3500;

	return (
		<div className={SCN('basket')}>
			<div className={SCN('basket__inner')}>
				<div className={SCN('basket__product')}>{`${product} товара`}</div>
				<div className={SCN('basket__sum')}>{`на сумму ${sum} ₽`}</div>
			</div>
		</div>
	);
};

export default Basket;
