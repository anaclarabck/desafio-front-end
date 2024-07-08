import axios from "axios";
import { FetchEmployeesResponse } from "@/types";
import {
  getEmployees,
  getEmployeesSuccess,
  getEmployeesFailure,
} from "./employees";
import { Dispatch } from "@reduxjs/toolkit";

const url = "http://localhost:3000/employees";

const fetchEmployees = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getEmployees());
    try {
      const response = await axios.get(url);
      dispatch(getEmployeesSuccess(response.data as FetchEmployeesResponse));
    } catch (err) {
      dispatch(getEmployeesFailure());
    }
  };
};

export default fetchEmployees;
