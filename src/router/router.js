import { createBrowserRouter } from 'react-router-dom';

import Catalog from '@page/catalog/Catalog';
import Basket from '@page/basket/Basket';
import NotFound from '@page/notFound/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Catalog />,
	},
	{
		path: '/basket',
		element: <Basket />,
	},
	{
		path: '/*',
		element: <NotFound />,
	},
]);
