import s from './ProductsList.module.scss';
import Card from '../../modules/card/Сard';
import { productsData as data } from '../../../data/data';

function ProductsList() {
	return (
		<div className={s.ProductsList}>
			{data.map((item) => (
				<Card data={item} key={item.id} />
			))}
		</div>
	);
}

export default ProductsList;
