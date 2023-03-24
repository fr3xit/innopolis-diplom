import { useNavigate } from 'react-router-dom';
import moduleClassNameBind from 'classnames/bind';

import { registration } from '@tools/formTools';
import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const RegistrationPage = function () {
	const go = useNavigate();

	const registrationHandler = user => {
		const result = registration(user);

		if (result.status) {
			go('/authorization');
			alert('Регистрация прошла успешно, авторизуйтесь');
		}

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
