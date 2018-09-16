import { combineReducers } from 'redux';
import nativeReducer from './nativeReducer';

export default combineReducers({
    native: nativeReducer
});