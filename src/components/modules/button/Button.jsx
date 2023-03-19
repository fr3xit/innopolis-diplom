import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import testFunc from '@js/testFunc';
import stylesButton from './Button.module.scss';

const classNameButton = moduleClassNameBind.bind(stylesButton);

const Button = function ({ children, mods = [], func = testFunc }) {
	return (
		<>
			{/* <button className={classNameButton('button')} onClick={func}> */}
			<button
				onClick={func}
				className={getClasses(classNameButton('button'), ...mods)}>
				<span>{children}</span>
			</button>
		</>
	);
};

export default Button;
