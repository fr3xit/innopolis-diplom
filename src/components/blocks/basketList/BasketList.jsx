import mcnBind from 'classnames/bind';
import { useSelector } from 'react-redux';

import Header from './elements/header/Header';
import Main from './elements/main/Main';
import Footer from './elements/footer/Footer';
import Card from '@modules/card/Card.jsx';

import styles from './BasketList.module.scss';

const SCN = mcnBind.bind(styles);

const BasketList = function () {
	const data = useSelector(state => state.basket.list);

	return (
		<>
			<div className={SCN('basket-list')}>
				{data.map(item => (
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
									id={item.id}
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
