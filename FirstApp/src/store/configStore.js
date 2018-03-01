import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import logger from 'redux-logger'

export default () => {
    let middlewares = [thunk];
    let store = createStore(reducers, applyMiddleware(logger, ...middlewares));
    return store;
}