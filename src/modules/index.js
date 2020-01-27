import {combineReducers} from 'redux';
import reply from './reply';
import replies from './replies';
const RootReducer = combineReducers({
    reply,
    replies
});

export default RootReducer;