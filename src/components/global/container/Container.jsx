import mcnBind from 'classnames/bind';

import styles from './Container.module.scss';

const SCN = mcnBind.bind(styles);

const Сontainer = function ({ children }) {
	return <div className={SCN('container')}>{children}</div>;
};

export default Сontainer;
