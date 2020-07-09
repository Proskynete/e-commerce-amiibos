import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../routes';

const FourZeroFour = lazy(() => import('./four_zero_four'));

const mainRoutes = routes.map((route) => (
	<Route
		key={route.name}
		path={route.path}
		exact={route.exact}
		component={(props) => <route.component {...props} />}
	/>
));

const App = () => (
	<Router basename='/'>
		<Suspense fallback={''}>
			<Switch>
				{mainRoutes}
				<Route path='*' component={(props) => <FourZeroFour {...props} />} />
			</Switch>
		</Suspense>
	</Router>
);

export default App;
