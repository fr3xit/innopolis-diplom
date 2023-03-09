import mcnBind from 'classnames/bind';

import styles from './Title.module.scss';

const SCN = mcnBind.bind(styles);

const Title = function ({ title = 'title' }) {
	return (
		<>
			<h2 className={SCN('title')}>{title}</h2>
		</>
	);
};

export default Title;
