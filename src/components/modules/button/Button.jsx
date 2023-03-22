import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';
import testFunc from '@tools/testFunc';
import stylesButton from './Button.module.scss';

const classNameButton = moduleClassNameBind.bind(stylesButton);

const Button = function ({
	children,
	submit,
	disabled,
	mods = [],
	func = testFunc,
}) {
	return (
		<>
			<button
				type={submit ? 'submit' : ''}
				disabled={disabled}
				onClick={func}
				className={getClasses(classNameButton('button'), ...mods)}>
				<span>{children}</span>
			</button>
		</>
	);
};

export default Button;
