import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { routes } from '../../routes';
import Navigation from '../../components/navbar/';

const mainRoutes = routes.map((route) => (
	<Route
		key={route.name}
		path={route.path}
		exact={route.exact}
		component={(props) => <route.component {...props} />}
	/>
));

const Layout = () => (
	<Container>
		<Suspense fallback={'Cargando...'}>
			<Row>
				<Navigation />
			</Row>
			<Switch>
				<Row>{mainRoutes}</Row>
			</Switch>
		</Suspense>
	</Container>
);

export default Layout;
