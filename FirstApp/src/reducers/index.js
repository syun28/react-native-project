import { combineReducers } from 'redux';
import expenses from './expenses';
import limit from './limit';

const rootReducer = combineReducers({
    expenses,
    limit
});

export default rootReducer;
