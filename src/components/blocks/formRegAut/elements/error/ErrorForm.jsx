import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';

import stylesErrorForm from './ErrorForm.module.scss';

const classNameErrorForm = moduleClassNameBind.bind(stylesErrorForm);

const ErrorForm = function ({ text, mods = [] }) {
	return (
		<div className={getClasses(classNameErrorForm('form-error'), ...mods)}>
			{text}
		</div>
	);
};

export default ErrorForm;
