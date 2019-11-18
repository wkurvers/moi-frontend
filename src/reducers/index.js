import {combineReducers } from 'redux';
import  userReducer from './userReducer';
import  loginReducer from './loginReducer';
import	registrationReducer from './registrationReducer';

export default combineReducers({
    users: userReducer,
    login: loginReducer,
    register: registrationReducer
});