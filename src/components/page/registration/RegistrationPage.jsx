import moduleClassNameBind from 'classnames/bind';

import { registration } from '@tools/formTools';
import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const RegistrationPage = function () {
	const registrationHandler = user => {
		const result = registration(user);

		return result;
	};
	return (
		<Layout
			main={
				<Container>
					<FormRegAut
						title="Регистрация"
						submitValue="Зарегистрироваться"
						link={{ href: '/authorization', text: 'Авторизоваться' }}
						func={registrationHandler}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default RegistrationPage;
