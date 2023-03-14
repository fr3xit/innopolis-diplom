import moduleClassNameBind from 'classnames/bind';

import stylesTitle from './Title.module.scss';

const classNameTitle = moduleClassNameBind.bind(stylesTitle);

const Title = function ({ children = 'title' }) {
	return (
		<>
			<h2 className={classNameTitle('title')}>{children}</h2>
		</>
	);
};

export default Title;
