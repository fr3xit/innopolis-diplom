import moduleClassNameBind from 'classnames/bind';

import testFunc from '@js/testFunc';
import stylesButton from './Button.module.scss';

const classNameButton = moduleClassNameBind.bind(stylesButton);

const Button = function ({ children, func = testFunc }) {
	return (
		<>
			<button className={classNameButton('button')} onClick={func}>
				<span>{children}</span>
			</button>
		</>
	);
};

export default Button;
