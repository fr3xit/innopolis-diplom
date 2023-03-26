import moduleClassNameBind from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logOut } from '@tools/formTools';

import { Modal } from '@blocks/modal/Modal';
import Button from '@modules/button/Button';

import stylesButton from '@modules/button/Button.module.scss';

const classNameButton = moduleClassNameBind.bind(stylesButton);

export const LogOut = function () {
	const go = useNavigate();

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');

	const logHandler = () => {
		logOut();
		go('/authorization');
	};

	const handler = () => {
		setMessage('Вы уверены ?');
		setOpen(true);
	};

	return (
		<>
			<Button func={handler} mods={[classNameButton('button_hollow')]}>
				Выйти
			</Button>

			<Modal
				func={logHandler}
				open={open}
				onClose={() => setOpen(false)}
				title="Выйти ?"
				content={message}
				buttonName="Да"
			/>
		</>
	);
};
