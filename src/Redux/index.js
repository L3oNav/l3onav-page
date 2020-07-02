import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import { LanguageReducer, Languages } from './Reducers/languages'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    LanguageReducer,
    Languages['US'],
    composeEnhancers(applyMiddleware(thunk))
)