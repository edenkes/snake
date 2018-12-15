import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    item: itemReducer,
    router: routerReducer
});
