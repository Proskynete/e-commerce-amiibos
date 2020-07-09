import { lazy } from 'react';

const HomeView = lazy(() => import('../views/layout/home/'));
const ProfileView = lazy(() => import('../views/layout/profile/'));

export const routes = [
	{
		path: '/',
		name: 'Inicio',
		exact: true,
		component: HomeView,
	},
	{
		path: '/profile',
		name: 'Perfil',
		exact: true,
		component: ProfileView,
	},
];
