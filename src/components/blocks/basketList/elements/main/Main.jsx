import mcnBind from 'classnames/bind';

import testFunc from '@js/testFunc';
import styles from './Main.module.scss';
const SCN = mcnBind.bind(styles);

const Main = function ({ title, func = testFunc }) {
	return (
		<h3 onClick={func} className={SCN('main__title')}>
			{title}
		</h3>
	);
};

export default Main;
