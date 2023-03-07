import mcnBind from 'classnames/bind';

import Products from '../page/products/Products';

import styles from './App.module.scss';

const SCN = mcnBind.bind(styles);

const App = function () {
	return (
		<div className={SCN('app')}>
			<Products />
		</div>
	);
};

export default App;
