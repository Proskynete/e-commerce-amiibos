import { lazy } from 'react';

const HomeView = lazy(() => import('../views/layout/home'));
const LoginView = lazy(() => import('../views/login'));

export const routes = [
	{
		path: '/',
		name: 'Inicio',
		exact: true,
		component: HomeView,
	},
	{
		path: '/login',
		name: 'Login',
		exact: true,
		component: LoginView,
	},
];
