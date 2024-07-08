import { createSlice } from "@reduxjs/toolkit";
import { EmployeeState } from "@/types";

const initialState: EmployeeState = {
  fulfilled: false,
  hasErrors: false,
  loading: false,
  employees: [],
  filteredEmployees: [],
};

const employeesSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    getEmployees: (state) => {
      state.loading = true;
    },
    getEmployeesSuccess: (state, action) => {
      state.employees = action.payload;
      state.filteredEmployees = action.payload;
      state.loading = false;
      state.fulfilled = true;
      state.hasErrors = false;
    },
    getEmployeesFailure: (state) => {
      state.loading = false;
      state.fulfilled = false;
      state.hasErrors = true;
    },
    getFilteredEmployees: (state, action) => {
      state.filteredEmployees = action.payload;
    },
    setFilteredEmployees: (state, action) => {
      state.filteredEmployees = action.payload;
    },
  },
});

export const {
  getEmployees,
  getEmployeesSuccess,
  getEmployeesFailure,
  getFilteredEmployees,
  setFilteredEmployees,
} = employeesSlice.actions;

export default employeesSlice.reducer;
