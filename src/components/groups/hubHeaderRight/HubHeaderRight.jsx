import moduleClassNameBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import Basket from '@blocks/basket/Basket';
import Button from '@modules/button/Button';

import stylesHubHeaderRight from './HubHeaderRight.module.scss';

const classNameHubHeaderRight = moduleClassNameBind.bind(stylesHubHeaderRight);

const HubHeaderRight = function () {
	return (
		<div className={classNameHubHeaderRight('hub-header-right')}>
			<Link to={'/basket'}>
				<Basket />
			</Link>
			<Button>Выйти</Button>
		</div>
	);
};

export default HubHeaderRight;
