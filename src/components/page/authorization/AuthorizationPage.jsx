import moduleClassNameBind from 'classnames/bind';

import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const logIn = () => {
	alert('LogIn');
};

const AuthorizationPage = function () {
	return (
		<Layout
			main={
				<Container>
					<FormRegAut
						title="Вход"
						submitValue="Войти"
						link={{ href: '/registration', text: 'Зарегистрироваться' }}
						handler={logIn}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default AuthorizationPage;
