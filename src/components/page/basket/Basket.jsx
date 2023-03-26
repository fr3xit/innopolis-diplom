import { useNavigate } from 'react-router-dom';
import moduleClassNameBind from 'classnames/bind';

import RequireAuth from '@hooks/RequireAuth';
import Layout from '@layouts/general/General.jsx';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';
import Container from '@global/container/Container';
import BasketList from '@blocks/basketList/BasketList';
import Footer from '@global/footer/Footer';
import FooterBasket from './elements/basketFooter/Footer';
import BtnUi from '@modules/button_ui/Button_ui';
import { LogOut } from '../../groups/logOut/LogOut';

import stylesContainer from '@global/container/Container.module.scss';
import stylesButtonUi from '@modules/button_ui/Button_ui.module.scss';

const classNameContainer = moduleClassNameBind.bind(stylesContainer);
const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Basket = function () {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<RequireAuth>
			<Layout
				header={
					<Container>
						<Header
							left={
								<BtnUi
									func={goBack}
									mods={[classNameButtonUi('button_arrow')]}
								/>
							}
							center={<Title>Корзина с выбранными товарами</Title>}
							right={<LogOut />}
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
		</RequireAuth>
	);
};

export default Basket;
