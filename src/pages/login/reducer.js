import  { loginAction } from '../../store/rootAction';
let stateData = {
    loginState:false,
};
function mainPageReducer(state=stateData, action) {
    if (action.type === loginAction.updateLoginState) {
        console.log(action)
        return Object.assign({}, state, {
            loginState:action.payload.loginState
        });
    } else if(action.type === loginAction.updateUseriInfo){
        return Object.assign({},state,{
            loginState:action.payload.loginState
        });

    } else {
        return state;
    }
}

export default mainPageReducer;