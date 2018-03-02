import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {createLogger} from 'redux-logger'

export default () => {
    const loggerMiddleware = createLogger();
    const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));
    return store;
}