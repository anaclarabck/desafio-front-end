import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, filterEmployees } from "@/slices";
import { Employee, RootState } from "@/types";
import { Header, Search, TableHeader, TableRow } from "./components";
import * as S from "./styles";

function Home() {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const { loading, hasErrors, filteredEmployees } = useSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterEmployees(search));
  }, [dispatch, search]);

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
            {filteredEmployees.map((employee: Employee) => (
              <TableRow employee={employee} key={employee.name} />
            ))}
          </S.TableBody>
        </S.Table>
      </S.Section>
    </>
  );
}

export default Home;
