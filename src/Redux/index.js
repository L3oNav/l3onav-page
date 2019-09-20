//? Redux
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

//? Reducers And Actions
import {reducers} from './reducers/index'

//? Store of redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

