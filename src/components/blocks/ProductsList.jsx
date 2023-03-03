import Card from '../modules/card/Сard';
import { productsData as data } from '../../data/data';

console.log(data);
// console.log(test);

function ProductsList() {
	return (
		<div className="ProductsList">
			<Card />
		</div>
	);
}

export default ProductsList;
