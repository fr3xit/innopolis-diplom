import mcnBind from 'classnames/bind';

import styles from './General.module.scss';

const SCN = mcnBind.bind(styles);

const General = function ({ header, main, footer }) {
	return (
		<div className={SCN('page')}>
			<div className={SCN('page__header-aut')}>{header()}</div>
			<main className={SCN('page__main')}>{main()}</main>
			<footer className={SCN('page__footer')}>footer</footer>
		</div>
	);
};

export default General;
