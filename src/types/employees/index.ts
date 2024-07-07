interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface FetchEmployeesResponse {
  data: Employee[];
}

export type { Employee, FetchEmployeesResponse };
