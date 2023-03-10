import mcnBind from 'classnames/bind';

import styles from './Title.module.scss';

const SCN = mcnBind.bind(styles);

const Title = function ({ children = 'title' }) {
	return (
		<>
			<h2 className={SCN('title')}>{children}</h2>
		</>
	);
};

export default Title;
