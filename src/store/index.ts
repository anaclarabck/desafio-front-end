import { employeesSlice } from "@/slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { employees: employeesSlice },
});

export default store;
