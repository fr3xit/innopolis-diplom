import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

// import App from './components/app/App';
import Products from '@page/products/Products';
import Basket from '@page/basket/Basket';
import NotFound from '@page/notFound/NotFound';
import { store } from './store/store';

import './styles/index.scss';

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
