import { Dispatch } from "redux";
import { Employee, RootState } from "@/types";
import { setFilteredEmployees } from "./employees";

function filterEmployeesByNameJobPhone(filteringObject: {
  filter: string;
  employees: Employee[];
}): Employee[] {
  const { filter, employees } = filteringObject;
  return employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(filter.toLowerCase()) ||
      employee.job.toLowerCase().includes(filter.toLowerCase()) ||
      employee.phone.toLowerCase().includes(filter)
    );
  });
}

export const filterEmployees = (filter: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { employees } = getState().employees;

    if (filter.length === 0) {
      return dispatch(setFilteredEmployees(employees));
    }
    const filteredEmployees = filterEmployeesByNameJobPhone({
      filter,
      employees,
    });
    return dispatch(setFilteredEmployees(filteredEmployees));
  };
};

export default filterEmployees;
