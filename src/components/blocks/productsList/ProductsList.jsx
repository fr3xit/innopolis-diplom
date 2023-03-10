import mcnBind from 'classnames/bind';

import Header from './elements/header/Header';
import Main from './elements/main/Main';
import Footer from './elements/footer/Footer';
import Card from '@modules/card/Card.jsx';

import styles from './ProductsList.module.scss';

const data = require('@data/productsData.json');
const SCN = mcnBind.bind(styles);

const ProductsList = function () {
	return (
		<>
			<div className={SCN('products-list')}>
				{data.map(item => (
					<div
						key={Date.now() + Math.random()}
						className={SCN('products-list__item')}>
						<Card
							key={item.id}
							Header={
								<Header
									url={item.img.url}
									alt={item.img.alt ? item.img.alt : item.title}
								/>
							}
							Main={<Main title={item.title} desc={item.desc} />}
							Footer={
								<Footer
									price={item.price}
									amount={item.amount}
									units={item.units}
								/>
							}
							mods={'vertically'}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductsList;