import mcnBind from 'classnames/bind';

import styles from './Footer.module.scss';

const SCN = mcnBind.bind(styles);

const Footer = function ({ children }) {
	return <footer className={SCN('footer')}>{children}</footer>;
};

export default Footer;
