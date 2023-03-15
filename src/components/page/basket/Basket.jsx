import moduleClassNameBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';

import Container from '@global/container/Container';
import BasketList from '@blocks/basketList/BasketList';
import Footer from '@global/footer/Footer';
import FooterBasket from './elements/basketFooter/Footer';
import BtnUi from '@modules/button_ui/Button_ui';

import stylesContainer from '@global/container/Container.module.scss';
const classNameContainer = moduleClassNameBind.bind(stylesContainer);

const Basket = function () {
	return (
		<Layout
			header={
				<Container mods={[classNameContainer('container_middle')]}>
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
				<Container mods={[classNameContainer('container_middle')]}>
					<BasketList />
				</Container>
			}
			footer={
				<Footer>
					<Container mods={[classNameContainer('container_middle')]}>
						<FooterBasket />
					</Container>
				</Footer>
			}
		/>
	);
};

export default Basket;
