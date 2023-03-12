import mcnBind from 'classnames/bind';

import BtnUi from '@modules/button_ui/Button_ui';
import ToPay from '@modules/toPay/ToPay';

import testFunc from '@js/testFunc';

import styles from './Footer.module.scss';
const SCN = mcnBind.bind(styles);

const Footer = function ({ price, amount, units, func = testFunc }) {
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

	return (
		<div className={SCN('add')}>
			<div className={SCN('add__result')}>
				<ToPay sum={price} mods={'orange'} />
			</div>

			<BtnUi mods={'close'} func={func} />
		</div>
	);
};

export default Footer;