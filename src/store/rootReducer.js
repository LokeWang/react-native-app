import homeReducer from '../pages/home/reducer';
import loginReducer from '../pages/login/reducer';
import messageReducer from '../pages/message/reducer';
import mineReducer from '../pages/mine/reducer';
import myElectricityReducer from '../pages/myElectricity/reducer';
import realtimeMonitorReducer from '../pages/realtimeMonitor/reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    loginReducer,
    messageReducer,
    homeReducer,
    mineReducer,
    myElectricityReducer,
    realtimeMonitorReducer,
});
export default rootReducer;