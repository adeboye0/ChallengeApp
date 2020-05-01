import {combineReducers} from 'redux';
import tranReducer from './tranReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    error: errorReducer,
    transaction: tranReducer
})