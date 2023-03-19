import moduleClassNameBind from 'classnames/bind';
import ToPay from '@modules/toPay/ToPay';
import Quantity from '@modules/quantity/Quantity';

import stylesSelectedPay from './SelectedPay.module.scss';
const classNameSelectedPay = moduleClassNameBind.bind(stylesSelectedPay);

const SelectedPay = function ({ price, amount, units }) {
	return (
		<div className={classNameSelectedPay('selected-pay')}>
			<ToPay sum={price} />
			<Quantity amount={amount} units={units} />
		</div>
	);
};

export default SelectedPay;
