import {combineReducers} from 'redux';
import ContaPageReducer from './ContaPageReducer';
import PrincipalPageReducer from './PrincipalPageReducer';
import LoginPageReducer from './LoginPageReducer';

export default combineReducers({
    ContaPageReducer: ContaPageReducer,
    PrincipalPageReducer: PrincipalPageReducer,
    LoginPageReducer: LoginPageReducer
})