import { combineReducers} from "redux";
import { cartData } from './reducer';
import {productNewReducer} from './productReducer'

export default combineReducers({
    cartData,
    productNewReducer
})