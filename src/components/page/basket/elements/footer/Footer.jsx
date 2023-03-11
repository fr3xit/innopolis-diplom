import mcnBind from 'classnames/bind';

import Button from '@modules/button/Button';
import ToPay from '@modules/toPay/ToPay';
import styles from './Footer.module.scss';

const SCN = mcnBind.bind(styles);

const footer = function () {
	return (
		<div className={SCN('basket-footer')}>
			<div className={SCN('basket-footer__info')}>
				<span>Заказ на сумму:</span>
				<ToPay sum={'6 220'} mods={'orange'} />
			</div>
			<Button>Оформить заказ</Button>
		</div>
	);
};

export default footer;
