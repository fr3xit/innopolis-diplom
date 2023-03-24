import moduleClassNameBind from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import { clearBasket } from '@store/slices/product/product';

import Button from '@modules/button/Button';
import ToPay from '@modules/toPay/ToPay';
import stylesFooter from './Footer.module.scss';

import stylesToPay from '@modules/toPay/ToPay.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameFooter = moduleClassNameBind.bind(stylesFooter);
const classNameToPay = moduleClassNameBind.bind(stylesToPay);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const Footer = function () {
	const dispatch = useDispatch();
	const price = useSelector(state => state.product.basket.sum);

	const handler = () => {
		dispatch(clearBasket());
		alert('Заказ оформлен, ожидайте');
	};

	return (
		<div className={classNameFooter('basket-footer')}>
			<div className={classNameFooter('basket-footer__info')}>
				<span>Заказ на сумму:</span>
				<ToPay
					sum={price}
					mods={[
						classNameToPay('to-pay_orange'),
						classNameToPay('to-pay_middle'),
					]}
				/>
			</div>
			<Button func={handler} mods={[classNameButton('button_full')]}>
				Оформить заказ
			</Button>
		</div>
	);
};

export default Footer;
