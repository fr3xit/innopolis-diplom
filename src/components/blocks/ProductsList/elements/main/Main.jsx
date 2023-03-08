import mcnBind from 'classnames/bind';

import testFunc from '@js/testFunc';
import styles from './Main.module.scss';
const SCN = mcnBind.bind(styles);

const Main = function ({ title, desc, func = testFunc }) {
	if (title.length > 25) {
		title = title.substring(0, 25) + '...';
	}

	return (
		<>
			<h3 onClick={func} className={SCN('main__title')}>
				{title}
			</h3>

			<div className={SCN('main__desc')}>
				<p className={SCN('main__text')}>{desc}</p>
			</div>
		</>
	);
};

export default Main;
