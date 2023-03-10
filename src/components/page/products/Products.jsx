import mcnBind from 'classnames/bind';

import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';
import Basket from '@blocks/basket/Basket';
import Container from '@global/container/Container';
import ProductsList from '@blocks/productsList/ProductsList';

import testFunc from '@js/testFunc';
import styles from './Products.module.scss';

const SCN = mcnBind.bind(styles);

const Products = function () {
	return (
		<Layout
			header={
				<Container>
					<Header
						left={<Title>наша продукция</Title>}
						right={<Basket func={testFunc} />}
					/>
				</Container>
			}
			main={
				<Container>
					<ProductsList />
				</Container>
			}
		/>
	);
};

export default Products;
