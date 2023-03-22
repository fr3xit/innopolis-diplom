import moduleClassNameBind from 'classnames/bind';

import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const registration = ({ email, password, agree }) => {
	console.log('registration');
	console.log('email = ', email);
	console.log('password = ', password);
	console.log('agree = ', agree);
};

const RegistrationPage = function () {
	return (
		<Layout
			main={
				<Container>
					<FormRegAut
						title="Регистрация"
						submitValue="Зарегистрироваться"
						link={{ href: '/authorization', text: 'Авторизоваться' }}
						func={registration}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default RegistrationPage;
