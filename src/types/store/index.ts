import rootReducer from "@/store/reducers";
import { Employee } from "../employees";

type EmployeeState = {
  fulfilled: boolean;
  hasErrors: boolean;
  loading: boolean;
  employees: Employee[];
  filteredEmployees: Employee[];
};

type RootState = ReturnType<typeof rootReducer>;

export type { EmployeeState, RootState };
