import mcnBind from 'classnames/bind';

import styles from './Container.module.scss';

const SCN = mcnBind.bind(styles);

const Сontainer = function ({ child }) {
	return (
		<>
			<div className={SCN('container')}>{child()}</div>;
		</>
	);
};

export default Сontainer;
