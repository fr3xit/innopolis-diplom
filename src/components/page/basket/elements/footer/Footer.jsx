import mcnBind from 'classnames/bind';

import Button from '@modules/button/Button';
import styles from './Footer.module.scss';

const SCN = mcnBind.bind(styles);

const footer = function () {
	return (
		<div className={SCN('basket-footer')}>
			<p className={SCN('basket-footer__info')}>
				<span>Заказ на сумму:</span>
				<span>6220 R</span>
			</p>
			<Button>Оформить заказ</Button>
		</div>
	);
};

export default footer;
