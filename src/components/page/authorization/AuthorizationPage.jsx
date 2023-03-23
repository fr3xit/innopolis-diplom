import moduleClassNameBind from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { authorization } from '@tools/formTools';
import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const AuthorizationPage = function () {
	const go = useNavigate();
	const authorizationHandler = user => {
		const result = authorization(user);
		if (result.status === true) go('/');

		return result;
	};

	return (
		<Layout
			main={
				<Container>
					<FormRegAut
						title="Вход"
						submitValue="Войти"
						link={{ href: '/registration', text: 'Зарегистрироваться' }}
						func={authorizationHandler}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default AuthorizationPage;
