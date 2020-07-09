import React from 'react';
import { render } from 'react-dom';
import App from './views';

import './assets/scss/styles.scss';

import * as serviceWorker from './serviceWorker';

const Main = () => <App />;

const root = document.getElementById('root');
render(<Main />, root);
serviceWorker.unregister();
