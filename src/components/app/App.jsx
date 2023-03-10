import mcnBind from 'classnames/bind';

import Products from '@page/products/Products';
import Basket from '@page/basket/Basket';

import styles from './App.module.scss';

const SCN = mcnBind.bind(styles);

const App = function () {
	return (
		<div className={SCN('app')}>
			<Basket />
			{/* <Products /> */}
		</div>
	);
};

export default App;
