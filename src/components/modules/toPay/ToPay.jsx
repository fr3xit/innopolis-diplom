import moduleClassNameBind from 'classnames/bind';

import stylesToPay from './ToPay.module.scss';

const classNameToPay = moduleClassNameBind.bind(stylesToPay);

const checkMods = function (mods) {
	let result;

	switch (mods) {
		case 'orange':
			result = classNameToPay('to-pay_orange');
			break;
		default:
			result = '';
	}

	return result;
};

const ToPay = function ({ sum = 0, currency = '₽ ', mods }) {
	return (
		<div className={classNameToPay('to-pay', checkMods(mods))}>
			<span className={classNameToPay('to-pay__sum')}>{sum}</span>
			<span className={classNameToPay('to-pay__currency')}>{currency}</span>
		</div>
	);
};

export default ToPay;
