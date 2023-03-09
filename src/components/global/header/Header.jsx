import mcnBind from 'classnames/bind';

import styles from './Header.module.scss';

const SCN = mcnBind.bind(styles);

const Header = function ({ left, center, right }) {
	return (
		<div className={SCN('header__inner')}>
			<div className={SCN('header__left')}>{left()}</div>
			<div className={SCN('header__center')}>{center()}</div>
			<div className={SCN('header__right')}>{right()}</div>
		</div>
	);
};

export default Header;
