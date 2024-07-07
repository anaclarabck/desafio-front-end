import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    getEmployeesSuccess: (state, { payload }) => {
      state.employees = payload;
      state.loading = false;
      state.fulfilled = true;
      state.hasErrors = false;
    },
    getEmployeesFailure: (state) => {
      state.loading = false;
      state.fulfilled = false;
      state.hasErrors = true;
    },
    getFilteredEmployees: (state, { payload }) => {
      state.filteredEmployees = payload;
    },
  },
});

export const {
  getEmployees,
  getEmployeesSuccess,
  getEmployeesFailure,
  getFilteredEmployees,
} = employeesSlice.actions;

export default employeesSlice.reducer;
