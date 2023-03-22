import moduleClassNameBind from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
	const [emailValue, setEmailValue] = useState();
	const [passwordValue, setPasswordValue] = useState();
	const [checkedAgree, setCheckedAgree] = useState(false);

	const [emailIsCustom, setEmailIsCustom] = useState(false);
	const [passwordIsCustom, setPasswordIsCustom] = useState(false);
	const [formCustom, setFormCustom] = useState(false);

	const [errorValidationEmail, setErrorValidationEmail] = useState(
		'Поле не должно быть пустым'
	);
	const [errorValidationPassword, setErrorValidationPassword] = useState(
		'Поле не должно быть пустым'
	);
	const [errorForm, setErrorForm] = useState('Логин или пароль неверен');

	const handler = event => {
		event.preventDefault();
		func();
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
								onChange={event => setEmailValue(event.target.value)}
								type="email"
								name="email"
								value={emailValue}
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
								onChange={event => setPasswordValue(event.target.value)}
								type="password"
								name="password"
								value={passwordValue}
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
					func={e => handler(e)}
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
