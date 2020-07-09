import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
	<Router basename='/'>
		<Navbar />
		<Suspense fallback={'Cargando...'}>
			<Switch>{mainRoutes}</Switch>
		</Suspense>
	</Router>
);

export default Layout;
