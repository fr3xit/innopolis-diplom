import mcnBind from 'classnames/bind';
import { useDispatch } from 'react-redux';

import BtnUi from '@modules/button_ui/Button_ui';
import ToPay from '@modules/toPay/ToPay';
import { addProductBasket } from '../../../../../store/slices/product/product';
import testFunc from '@js/testFunc';

import styles from './Footer.module.scss';

const SCN = mcnBind.bind(styles);

const Footer = function ({ id, price, amount, units, func = testFunc }) {
	const dispatch = useDispatch();

	let dimension = '';

	switch (units) {
		case 'grams':
			dimension = 'г';
			break;
		case 'pieces':
			dimension = 'шт';
			break;
		default:
			dimension = 'шт';
	}

	const test = () => dispatch(addProductBasket(id));

	return (
		<div className={SCN('add')}>
			<div className={SCN('add__result')}>
				<ToPay sum={price} />
				<span className={SCN('add__amount')}>
					{` / ${amount} ${dimension} .`}
				</span>
			</div>

			<BtnUi key={Date.now()} func={test} />
		</div>
	);
};

export default Footer;
