import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import Navbar from '../../components/navbar/';

const mainRoutes = routes.map((route) => (
	<Route
		key={route.name}
		path={route.path}
		exact={route.exact}
		component={(props) => <route.component {...props} />}
	/>
));

const Layout = () => (
	<Suspense fallback={'Cargando...'}>
		<Navbar />
		<Switch>{mainRoutes}</Switch>
	</Suspense>
);

export default Layout;
