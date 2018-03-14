import {combineReducers} from 'redux';
import ContaPageReducer from './ContaPageReducer';
import PrincipalPageReducer from './PrincipalPageReducer';
import LoginPageReducer from './LoginPageReducer';
import RegistroPageReducer from './RegistroPageReducer';
import RotasPageReducer from './RotasPageReducer';


export default combineReducers({
    ContaPageReducer: ContaPageReducer,
    PrincipalPageReducer: PrincipalPageReducer,
    LoginPageReducer: LoginPageReducer,
    RegistroPageReducer: RegistroPageReducer,
    RotasPageReducer: RotasPageReducer
})