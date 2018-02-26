import {combineReducers} from 'redux';
import ContaPageReducer from './ContaPageReducer';
import PrincipalPageReducer from './PrincipalPageReducer';

export default combineReducers({
    ContaPageReducer: ContaPageReducer,
    PrincipalPageReducer: PrincipalPageReducer
})