import mcnBind from 'classnames/bind';

import styles from './Header.module.scss';

const SCN = mcnBind.bind(styles);

const Header = function ({ url, alt }) {
	return (
		<>
			<img className={SCN('product-img')} src={url} alt={alt} />
		</>
	);
};

export default Header;
