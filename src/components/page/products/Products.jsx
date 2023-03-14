import { Link } from 'react-router-dom';

import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';
import Basket from '@blocks/basket/Basket';
import ProductsList from '@blocks/productsList/ProductsList';

const Products = function () {
	return (
		<Layout
			header={
				<Container>
					<Header
						left={<Title>наша продукция</Title>}
						right={
							<Link to={'/basket'}>
								<Basket />
							</Link>
						}
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
