import { combineReducers } from "redux";
import signUpReducer from "./auth/reducers";

const rootReducer = combineReducers({
    signup: signUpReducer,
})

export default rootReducer