import { combineReducers } from 'redux';
import nav from './nav.js'
import auth from './auth.js'

const AppReducer = combineReducers({nav,
    auth});
  
export default AppReducer;

