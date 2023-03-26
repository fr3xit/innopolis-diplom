import { useNavigate } from 'react-router-dom';
import moduleClassNameBind from 'classnames/bind';
import { useState } from 'react';

import { registration } from '@tools/formTools';

import { Modal } from '@blocks/modal/Modal';
import Layout from '@layouts/simple/Simple.jsx';
import Container from '@global/container/Container';
import FormRegAut from '@blocks/formRegAut/FormRegAut';

import stylesLayout from '@layouts/simple/Simple.module.scss';
const classNameLayout = moduleClassNameBind.bind(stylesLayout);

const RegistrationPage = function () {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const go = useNavigate();

	const func = () => {
		go('/authorization');
	};

	const registrationHandler = user => {
		const result = registration(user);

		if (result.status) {
			setMessage('Регистрация прошла успешно, авторизуйтесь');
			setOpen(true);
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
					<Modal
						func={func}
						open={open}
						onClose={() => setOpen(false)}
						title="Успех"
						content={message}
					/>
				</Container>
			}
			mods={[classNameLayout('page_entrance')]}
		/>
	);
};

export default RegistrationPage;
