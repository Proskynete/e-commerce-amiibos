import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {} from './reducers';

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
