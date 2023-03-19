import { useNavigate } from 'react-router-dom';
import moduleClassNameBind from 'classnames/bind';

import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import Header from '@global/header/Header';
import ProductItem from '@blocks/product/Product';
import BtnUi from '@modules/button_ui/Button_ui';

import stylesLayout from '@layouts/simple/Simple.module.scss';
import stylesButtonUi from '@modules/button_ui/Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const Product = function () {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<Layout
			header={
				<Container>
					<Header
						left={
							<BtnUi func={goBack} mods={[classNameButtonUi('button_arrow')]} />
						}
					/>
				</Container>
			}
			main={
				<Container>
					<ProductItem />
				</Container>
			}
			mods={[classNameLayout('page_product')]}
		/>
	);
};

export default Product;
