import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, amiibosReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
	loginStore: loginReducer,
	amiibosStore: amiibosReducer,
	cartStore: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
