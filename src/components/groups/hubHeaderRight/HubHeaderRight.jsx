import moduleClassNameBind from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import Basket from '@blocks/basket/Basket';
import { LogOut } from '../logOut/LogOut';

import stylesHubHeaderRight from './HubHeaderRight.module.scss';

const classNameHubHeaderRight = moduleClassNameBind.bind(stylesHubHeaderRight);

const HubHeaderRight = function () {
	return (
		<div className={classNameHubHeaderRight('hub-header-right')}>
			<Link to={'/basket'}>
				<Basket />
			</Link>

			<LogOut />
		</div>
	);
};

export default HubHeaderRight;
