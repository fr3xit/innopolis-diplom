import moduleClassNameBind from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import { logOut } from '@tools/formTools';

import Basket from '@blocks/basket/Basket';
import Button from '@modules/button/Button';

import stylesHubHeaderRight from './HubHeaderRight.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameHubHeaderRight = moduleClassNameBind.bind(stylesHubHeaderRight);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const HubHeaderRight = function () {
	const go = useNavigate();
	const logHandler = () => {
		logOut();
		go('/authorization');
	};

	return (
		<div className={classNameHubHeaderRight('hub-header-right')}>
			<Link to={'/basket'}>
				<Basket />
			</Link>
			<Button func={logHandler} mods={[classNameButton('button_hollow')]}>
				Выйти
			</Button>
		</div>
	);
};

export default HubHeaderRight;
