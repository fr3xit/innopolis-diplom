import moduleClassNameBind from 'classnames/bind';

import { authorization } from '@tools/formTools';
import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const AuthorizationPage = function () {
	return (
		<Layout
			main={
				<Container>
					<FormRegAut
						title="Вход"
						submitValue="Войти"
						link={{ href: '/registration', text: 'Зарегистрироваться' }}
						func={authorization}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default AuthorizationPage;
