import mcnBind from 'classnames/bind';

// import Layout from '@layouts/general/General.jsx';
import Layout from '../../layouts/general/General';
import HeaderSample from '@global/header/Header';
import TitleSample from '@global/header/elements/title/Title';
import BasketSample from '@blocks/basket/Basket';
import Container from '@global/container/Container';
import ProductsList from '@blocks/productsList/ProductsList';

import testFunc from '@js/testFunc';
import styles from './Products.module.scss';

const SCN = mcnBind.bind(styles);

const TitleReady = () => <TitleSample title={'наша продукция'} />;
const BasketReady = () => <BasketSample func={testFunc} />;
const HeaderReady = () => (
	<HeaderSample left={TitleReady} right={BasketReady} />
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
