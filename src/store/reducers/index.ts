import { combineReducers } from "redux";
import { employeesSlice } from "@/slices";

const rootReducer = combineReducers({ employees: employeesSlice });

export default rootReducer;
