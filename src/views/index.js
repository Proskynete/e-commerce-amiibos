import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const FourZeroFour = lazy(() => import('./four_zero_four'));
const LoginView = lazy(() => import('./login'));
const Layout = lazy(() => import('./layout'));

const App = () => {
	return (
		<Suspense fallback={'Cargando...'}>
			<div className='main-section'>
				<Switch>
					<Route exact path='/' component={(props) => <Layout {...props} />} />
					<Route
						exact
						path='/login'
						component={(props) => <LoginView {...props} />}
					/>
					<Route path='*' component={(props) => <FourZeroFour {...props} />} />
				</Switch>
			</div>
		</Suspense>
	);
};

export default connect((state) => state, null)(App);
