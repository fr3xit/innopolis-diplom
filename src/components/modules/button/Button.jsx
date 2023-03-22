import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';
import testFunc from '@tools/testFunc';
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
