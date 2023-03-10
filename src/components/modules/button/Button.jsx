import mcnBind from 'classnames/bind';

import testFunc from '@js/testFunc';
import styles from './Button.module.scss';

const SCN = mcnBind.bind(styles);

const Button = function ({ children, func = testFunc }) {
	return (
		<>
			<button className={SCN('button')} onClick={func}>
				<span>{children}</span>
			</button>
		</>
	);
};

export default Button;
