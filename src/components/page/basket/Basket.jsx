import mcnBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';

import Container from '@global/container/Container';
import BasketList from '@blocks/basketList/BasketList';
import Footer from '@global/footer/Footer';
import FooterBasket from './elements/footer/Footer';
import BtnUi from '@modules/button_ui/Button_ui';

import styles from './Basket.module.scss';

const SCN = mcnBind.bind(styles);

const Basket = function () {
	return (
		<Layout
			header={
				<Container>
					<Header
						left={
							<Link to={'/'}>
								<BtnUi mods={'arrow'} />
							</Link>
						}
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
				<Footer>
					<Container>
						<FooterBasket />
					</Container>
				</Footer>
			}
		/>
	);
};

export default Basket;
