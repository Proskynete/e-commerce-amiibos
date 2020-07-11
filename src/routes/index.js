import { lazy } from 'react';

const HomeView = lazy(() => import('../views/layout/home'));
const CheckoutView = lazy(() => import('../views/layout/checkout'));

export const routes = [
	{
		path: '/',
		name: 'Inicio',
		exact: true,
		component: HomeView,
	},
	{
		path: '/checkout',
		name: 'Checkout',
		exact: true,
		component: CheckoutView,
	},
];
