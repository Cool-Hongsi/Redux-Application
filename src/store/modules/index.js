import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting';

// Root Reducer
export default combineReducers({
    counter,
    waiting,
    // Other reducers
});