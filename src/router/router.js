import { createBrowserRouter } from 'react-router-dom';

import Catalog from '@page/catalog/Catalog';
import Product from '@page/product/Product';
import Basket from '@page/basket/Basket';
import AuthorizationPage from '@page/authorization/AuthorizationPage';
import RegistrationPage from '@page/registration/RegistrationPage';
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
		path: '/product/:id',
		element: <Product />,
	},
	{
		path: '/authorization',
		element: <AuthorizationPage />,
	},
	{
		path: '/registration',
		element: <RegistrationPage />,
	},
	{
		path: '/*',
		element: <NotFound />,
	},
]);
