import rootReducer from "@/store/reducers";
import { Employee } from "../employees";
import store from "@/store";

type AppDispatch = typeof store.dispatch;

type EmployeeState = {
  fulfilled: boolean;
  hasErrors: boolean;
  loading: boolean;
  employees: Employee[];
  filteredEmployees: Employee[];
};

type RootState = ReturnType<typeof rootReducer>;

export type { AppDispatch, EmployeeState, RootState };
