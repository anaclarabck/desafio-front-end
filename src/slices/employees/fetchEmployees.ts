import axios from "axios";
import { FetchEmployeesResponse } from "@/types";
import {
  getEmployees,
  getEmployeesSuccess,
  getEmployeesFailure,
} from "./employees";

const url = "http://localhost:3000/employees";

const fetchEmployees = () => {
  // TODO: verificar este tipo
  return async (dispatch) => {
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
