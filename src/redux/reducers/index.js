import { combineReducers } from "redux";
import userreducer from "./user";

const rootreducer = combineReducers({user:userreducer});

export default rootreducer;