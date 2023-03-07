import mcnBind from 'classnames/bind';

import styles from './Button_ui.module.scss';

const SCN = mcnBind.bind(styles);

const Button_ui = function ({ func }) {
	return (
		<div className={SCN('button')} onClick={func}>
			<div className={SCN('button__inner')}>
				<span className={SCN('button__line')}></span>
				<span className={SCN('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
