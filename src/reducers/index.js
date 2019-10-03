import {combineReducers} from "redux";
import user from "./user";
import buyCount from "./buyCount";

export default combineReducers({
    user,
    buyCount
})