import moduleClassNameBind from 'classnames/bind';

import stylesFooter from './Footer.module.scss';

const classNameFooter = moduleClassNameBind.bind(stylesFooter);

const Footer = function ({ children }) {
	return <footer className={classNameFooter('footer')}>{children}</footer>;
};

export default Footer;
