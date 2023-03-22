import moduleClassNameBind from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@modules/button/Button';
import stylesFormRegAut from './FormRegAut.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameFormRegAut = moduleClassNameBind.bind(stylesFormRegAut);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const ErrorValidation = function ({ text }) {
	return <span>{text}</span>;
};

const FormRegAut = function ({
	title,
	submitValue,
	link: { href: linkHref, text: linkText },
	handler,
}) {
	const [errorValidationEmail, setErrorValidationEmail] = useState(false);
	const [errorValidationPassword, setErrorValidationPassword] = useState(false);
	const [errorForm, setErrorForm] = useState(false);

	return (
		<div className={classNameFormRegAut('reg-aut')}>
			<form className={classNameFormRegAut('reg-aut__inner')} action="#">
				<Link to={linkHref} className={classNameFormRegAut('reg-aut__link')}>
					{linkText}
				</Link>

				<h2 className={classNameFormRegAut('reg-aut__title')}>{title}</h2>

				<fieldset>
					<label>
						<input type="email" name="email" placeholder="Логин" />
						{errorValidationEmail ? (
							<ErrorValidation text={errorValidationEmail} />
						) : (
							''
						)}
					</label>

					<label>
						<input type="password" name="password" placeholder="Пароль" />
						{errorValidationPassword ? (
							<ErrorValidation text={errorValidationPassword} />
						) : (
							''
						)}
					</label>
				</fieldset>

				<label className={classNameFormRegAut('reg-aut__agree-box')}>
					<input
						className={classNameFormRegAut('default-checkbox')}
						type="checkbox"
						name="agree"
					/>
					<span className={classNameFormRegAut('custom-checkbox')}></span>
					<span className={classNameFormRegAut('reg-aut__agree-text')}>
						Я согласен получать обновления на почту
					</span>
				</label>

				<div>{errorForm ? <ErrorValidation text={errorForm} /> : ''}</div>

				<Button
					func={handler}
					mods={[
						classNameButton('button_full'),
						classNameButton('button_center'),
					]}>
					{submitValue}
				</Button>
			</form>
		</div>
	);
};

export default FormRegAut;
