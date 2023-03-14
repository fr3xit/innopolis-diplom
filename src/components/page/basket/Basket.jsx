import { Link } from 'react-router-dom';

import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';

import Container from '@global/container/Container';
import BasketList from '@blocks/basketList/BasketList';
import Footer from '@global/footer/Footer';
import FooterBasket from './elements/basketFooter/Footer';
import BtnUi from '@modules/button_ui/Button_ui';

const Basket = function () {
	return (
		<Layout
			header={
				<Container mods={'middle'}>
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
				<Container mods={'middle'}>
					<BasketList />
				</Container>
			}
			footer={
				<Footer>
					<Container mods={'middle'}>
						<FooterBasket />
					</Container>
				</Footer>
			}
		/>
	);
};

export default Basket;
