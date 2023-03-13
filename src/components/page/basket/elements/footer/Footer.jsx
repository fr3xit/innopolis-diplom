import mcnBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import Button from '@modules/button/Button';
import ToPay from '@modules/toPay/ToPay';
import styles from './Footer.module.scss';

const SCN = mcnBind.bind(styles);

const Footer = function () {
	const price = useSelector(state => state.basket.sum);

	return (
		<div className={SCN('basket-footer')}>
			<div className={SCN('basket-footer__info')}>
				<span>Заказ на сумму:</span>
				<ToPay sum={price} mods={'orange'} />
			</div>
			<Button>Оформить заказ</Button>
		</div>
	);
};

export default Footer;
