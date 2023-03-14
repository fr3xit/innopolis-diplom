import moduleClassNameBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import Button from '@modules/button/Button';
import ToPay from '@modules/toPay/ToPay';
import stylesFooter from './Footer.module.scss';

const classNameFooter = moduleClassNameBind.bind(stylesFooter);

const Footer = function () {
	const price = useSelector(state => state.product.basket.sum);

	return (
		<div className={classNameFooter('basket-footer')}>
			<div className={classNameFooter('basket-footer__info')}>
				<span>Заказ на сумму:</span>
				<ToPay sum={price} mods={'orange'} />
			</div>
			<Button>Оформить заказ</Button>
		</div>
	);
};

export default Footer;