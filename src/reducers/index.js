import {combineReducers } from 'redux';
import  userReducer from './userReducer';
import  loginReducer from './loginReducer';
import	registrationReducer from './registrationReducer';
import profileCreationReducer from './profileCreationReducer';

export default combineReducers({
    users: userReducer,
    login: loginReducer,
    register: registrationReducer,
    profile: profileCreationReducer
});