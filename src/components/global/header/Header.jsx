import moduleClassNameBind from 'classnames/bind';

import stylesHeader from './Header.module.scss';

const classNameHeader = moduleClassNameBind.bind(stylesHeader);

const Header = function ({ left, center, right }) {
	return (
		<div className={classNameHeader('header__inner')}>
			<div className={classNameHeader('header__left')}>{left ? left : ''}</div>

			<div className={classNameHeader('header__center')}>
				{center ? center : ''}
			</div>

			<div className={classNameHeader('header__right')}>
				{right ? right : ''}
			</div>
		</div>
	);
};

export default Header;
