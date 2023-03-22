import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';
import testFunc from '@tools/testFunc';
import stylesButton from './Button.module.scss';

const classNameButton = moduleClassNameBind.bind(stylesButton);

const Button = function ({ children, submit, mods = [], func = testFunc }) {
	return (
		<>
			<button
				type={submit ? 'submit' : ''}
				onClick={func}
				className={getClasses(classNameButton('button'), ...mods)}>
				<span>{children}</span>
			</button>
		</>
	);
};

export default Button;
