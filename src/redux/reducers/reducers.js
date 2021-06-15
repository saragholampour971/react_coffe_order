import { combineReducers } from "redux";
import { Checkbox_Reducer } from './checkbox_reducer';
import { HandleAccount_Reducer } from './handleaccount';
import { whoslogin_reducer } from './whoslogin_reducer';
import { Products_Reducer } from './products_reducer';

export const reducers = combineReducers({
    checkbox: Checkbox_Reducer,
    accounts: HandleAccount_Reducer,
    whoslogin: whoslogin_reducer,
    products: Products_Reducer,
});