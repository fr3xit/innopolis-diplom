import cnBind from 'classnames/bind';

import Card from '../../modules/card/Сard';

import styles from './ProductsList.module.scss';

const SCN = cnBind.bind(styles);
// import { productsData as data } from '../../../data/data';
let data = require('../../../data/productsData.json');

function ProductsList() {
	return (
		<div className={SCN('ProductsList')}>
			{data.map(item => (
				<Card data={item} key={item.id} />
			))}
		</div>
	);
}

export default ProductsList;
