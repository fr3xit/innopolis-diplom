import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';
import stylesToPay from './ToPay.module.scss';

const classNameToPay = moduleClassNameBind.bind(stylesToPay);

const configSum = {
	style: 'currency',
	currency: 'rub',
	minimumFractionDigits: 0,
};

const ToPay = function ({ sum = 0, mods = '' }) {
	return (
		<div className={getClasses(classNameToPay('to-pay'), ...mods)}>
			<span className={classNameToPay('to-pay__sum')}>
				{sum.toLocaleString('ru', configSum)}
			</span>
		</div>
	);
};

export default ToPay;
