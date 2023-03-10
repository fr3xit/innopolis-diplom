import mcnBind from 'classnames/bind';

import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';

import Container from '@global/container/Container';
import BasketList from '@blocks/basketList/BasketList';

import testFunc from '@js/testFunc';
import styles from './Basket.module.scss';

const SCN = mcnBind.bind(styles);

const Basket = function () {
	return (
		<Layout
			header={
				<Container>
					<Header
						left={<p>Назад</p>}
						center={<Title>Корзина с выбранными товарами</Title>}
					/>
				</Container>
			}
			main={
				<Container>
					<BasketList />
				</Container>
			}
			footer={
				<>
					<hr />
					<Container>
						<p>Footer</p>
					</Container>
				</>
			}
		/>
	);
};

export default Basket;
