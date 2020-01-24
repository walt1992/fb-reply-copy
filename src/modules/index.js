import {combineReducers} from 'redux';
import reply from './reply';
import replies from './replies';
const rootReducer = combineReducers({
    reply,
    replies
});

export default rootReducer;