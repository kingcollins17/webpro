import { combineReducers } from "redux";
import taskReducer from "./task";
import authReducer from "./auth";
import fundReducer from "./fund";

//combining our appliations reducers to one root reducer...

const rootReducer = combineReducers({
	task: taskReducer,
	auth: authReducer,
	fund: fundReducer,
});

export default rootReducer;
