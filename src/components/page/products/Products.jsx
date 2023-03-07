import Container from '@global/container/Container';
import ProductsList from '@blocks/productsList/ProductsList';

import styles from './Products.module.scss';

const Products = function () {
	return (
		<>
			<Container child={ProductsList} />
		</>
	);
};

export default Products;
