import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "@/slices";
import { Employee } from "@/types";
import { Header, Search, TableHeader, TableRow } from "./components";
import * as S from "./styles";

function Home() {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const { employees, loading, hasErrors } = useSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  function handleSearch(value: string) {
    setSearch(value);
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (hasErrors) {
    return <p>Algo deu errado</p>;
  }

  return (
    <>
      <Header />
      <S.Section>
        <S.HeadingAndSearchContainer>
          <S.Heading>Funcionários</S.Heading>
          <Search onChange={handleSearch} value={search} />
        </S.HeadingAndSearchContainer>
        <S.Table>
          <TableHeader />
          <S.TableBody>
            {employees.map((employee: Employee) => (
              <TableRow employee={employee} key={employee.name} />
            ))}
          </S.TableBody>
        </S.Table>
      </S.Section>
    </>
  );
}

export default Home;
