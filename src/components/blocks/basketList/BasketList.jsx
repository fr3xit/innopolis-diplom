import mcnBind from 'classnames/bind';

import Header from './elements/header/Header';
import Main from './elements/main/Main';
import Footer from './elements/footer/Footer';
import Card from '@modules/card/Card.jsx';

import styles from './BasketList.module.scss';

const data = require('@data/productsData.json');
const SCN = mcnBind.bind(styles);

const dataTest = [...data, ...data];
const BasketList = function () {
	return (
		<>
			<div className={SCN('basket-list')}>
				{dataTest.map(item => (
					<div
						key={Date.now() + Math.random()}
						className={SCN('basket-list__item')}>
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
							mods={'horizontal'}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default BasketList;
