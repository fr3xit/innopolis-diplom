import moduleClassNameBind from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { emailValidation, passwordValidation } from '@tools/formTools';

import Button from '@modules/button/Button';
import ErrorForm from './elements/error/ErrorForm';

import stylesFormRegAut from './FormRegAut.module.scss';
import stylesErrorForm from './elements/error/ErrorForm.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameFormRegAut = moduleClassNameBind.bind(stylesFormRegAut);
const classNameButton = moduleClassNameBind.bind(stylesButton);
const classNameErrorForm = moduleClassNameBind.bind(stylesErrorForm);

const FormRegAut = function ({
	title,
	submitValue,
	link: { href: linkHref, text: linkText },
	func,
}) {
	const messageEmpty = 'Поле не должно быть пустым';

	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [checkedAgree, setCheckedAgree] = useState(false);

	const [emailIsCustom, setEmailIsCustom] = useState(false);
	const [passwordIsCustom, setPasswordIsCustom] = useState(false);
	const [formCustom, setFormCustom] = useState(false);

	const [formValid, setFormValid] = useState(false);
	const [errorValidationEmail, setErrorValidationEmail] = useState();
	const [errorValidationPassword, setErrorValidationPassword] = useState();
	const [errorForm, setErrorForm] = useState('Логин или пароль неверен');

	useEffect(() => {
		if (
			errorValidationEmail ||
			errorValidationPassword ||
			!emailIsCustom ||
			!passwordIsCustom
		) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [
		errorValidationEmail,
		errorValidationPassword,
		emailIsCustom,
		passwordIsCustom,
	]);

	const getData = () => {
		return {
			email: emailValue,
			password: passwordValue,
			agree: checkedAgree,
		};
	};

	const blurHandler = event => {
		switch (event.target.name) {
			case 'email': {
				setEmailIsCustom(true);
				break;
			}
			case 'password': {
				setPasswordIsCustom(true);
				break;
			}
		}
	};

	const emailHandler = event => {
		let email = event.target.value;
		const { errorDesc } = emailValidation(email);

		setEmailValue(email);

		if (email.length > 0) {
			setErrorValidationEmail(errorDesc);
		} else if (email.length <= 0) {
			setErrorValidationEmail(messageEmpty);
		} else {
			setErrorValidationEmail('');
		}
	};

	const passwordHandler = event => {
		let password = event.target.value;
		const { errorDesc } = passwordValidation(password);

		setPasswordValue(password);

		if (password.length > 0) {
			setErrorValidationPassword(errorDesc);
		} else if (password.length <= 0) {
			setErrorValidationPassword(messageEmpty);
		} else {
			setErrorValidationPassword('');
		}
	};

	const submitHandler = event => {
		event.preventDefault();
		func(getData());
	};

	return (
		<div className={classNameFormRegAut('reg-aut')}>
			<form className={classNameFormRegAut('reg-aut__inner')} action="#">
				<Link to={linkHref} className={classNameFormRegAut('reg-aut__link')}>
					{linkText}
				</Link>

				<h2 className={classNameFormRegAut('reg-aut__title')}>{title}</h2>

				<fieldset>
					<div className={classNameFormRegAut('reg-aut__input-box')}>
						<label>
							<input
								onChange={e => emailHandler(e)}
								onBlur={e => blurHandler(e)}
								value={emailValue}
								type="email"
								name="email"
								placeholder="Логин"
							/>
						</label>
						{emailIsCustom && errorValidationEmail ? (
							<ErrorForm text={errorValidationEmail} />
						) : (
							''
						)}
					</div>

					<div className={classNameFormRegAut('reg-aut__input-box')}>
						<label>
							<input
								onChange={e => passwordHandler(e)}
								onBlur={e => blurHandler(e)}
								value={passwordValue}
								type="password"
								name="password"
								placeholder="Пароль"
							/>
						</label>
						{passwordIsCustom && errorValidationPassword ? (
							<ErrorForm text={errorValidationPassword} />
						) : (
							''
						)}
					</div>
				</fieldset>

				<label className={classNameFormRegAut('reg-aut__agree-box')}>
					<input
						onChange={() => setCheckedAgree(!checkedAgree)}
						checked={checkedAgree}
						className={classNameFormRegAut('default-checkbox')}
						type="checkbox"
						name="agree"
					/>
					<span className={classNameFormRegAut('custom-checkbox')}></span>
					<span className={classNameFormRegAut('reg-aut__agree-text')}>
						Я согласен получать обновления на почту
					</span>
				</label>

				<div className={classNameFormRegAut('reg-aut__error')}>
					{formCustom && errorForm ? (
						<ErrorForm
							text={errorForm}
							mods={[classNameErrorForm('form-error_center')]}
						/>
					) : (
						''
					)}
				</div>

				<Button
					func={e => submitHandler(e)}
					disabled={!formValid}
					submit={true}
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
