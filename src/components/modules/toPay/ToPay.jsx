import moduleClassNameBind from 'classnames/bind';

import stylesToPay from './ToPay.module.scss';

const classNameToPay = moduleClassNameBind.bind(stylesToPay);

const configSum = {
	style: 'currency',
	currency: 'rub',
	minimumFractionDigits: 0,
};

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
			<span className={classNameToPay('to-pay__sum')}>
				{sum.toLocaleString('ru', configSum)}
			</span>
		</div>
	);
};

export default ToPay;
