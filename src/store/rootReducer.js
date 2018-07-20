import mainPageReducer from '../pages/login/reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    mainPageReducer,
});
export default rootReducer;