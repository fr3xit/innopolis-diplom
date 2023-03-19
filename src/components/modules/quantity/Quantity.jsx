import moduleClassNameBind from 'classnames/bind';

import { getUnits } from './quantityTools';

import stylesQuantity from './Quantity.module.scss';

const classNameQuantity = moduleClassNameBind.bind(stylesQuantity);

const Quantity = function ({ amount, units }) {
	return (
		<span className={classNameQuantity('quantity')}>
			<span className={classNameQuantity('quantity__separator')}>/</span>
			<span className={classNameQuantity('quantity__amount')}>
				{`${amount} ${getUnits(units)} .`}
			</span>
		</span>
	);
};

export default Quantity;
