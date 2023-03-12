import { createBrowserRouter } from 'react-router-dom';

import Products from '@page/products/Products';
import Basket from '@page/basket/Basket';
import NotFound from '@page/notFound/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Products />,
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
