import mcnBind from 'classnames/bind';

import styles from './ToPay.module.scss';

const SCN = mcnBind.bind(styles);

const checkMods = function (mods) {
	let result;

	switch (mods) {
		case 'orange':
			result = SCN('to-pay_orange');
			break;
		default:
			result = '';
	}

	return result;
};

const ToPay = function ({ sum = 0, currency = '₽ ', mods }) {
	return (
		<div className={SCN('to-pay', checkMods(mods))}>
			<span className={SCN('to-pay__sum')}>{sum}</span>
			<span className={SCN('to-pay__currency')}>{currency}</span>
		</div>
	);
};

export default ToPay;
