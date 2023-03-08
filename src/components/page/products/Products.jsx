import mcnBind from 'classnames/bind';

// import Layout from '@layouts/general/General.jsx';
import Layout from '../../layouts/general/General';
import HeaderSample from '@global/header/Header';
import Basket from '@blocks/basket/Basket';
import Container from '@global/container/Container';
import ProductsList from '@blocks/productsList/ProductsList';

import styles from './Products.module.scss';

const SCN = mcnBind.bind(styles);

const Title = () => (
	<>
		<h2>Header</h2>
	</>
);
const Text = () => (
	<>
		<p>Текст</p>
	</>
);
// const Basket = () => <p>Корзина</p>;

const HeaderReady = () => (
	<HeaderSample left={Title} center={Text} right={Basket} />
);

const Header = () => (
	<>
		<Container child={HeaderReady} />
	</>
);
const Main = () => (
	<>
		<Container child={ProductsList} />
	</>
);

// Container.child = ProductsList;
const Products = function () {
	return (
		<>
			<Layout header={Header} main={Main} />
		</>
	);
};

export default Products;
