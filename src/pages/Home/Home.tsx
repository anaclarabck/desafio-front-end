import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, filterEmployees } from "@/slices";
import { Employee, RootState } from "@/types";
import { Search, TableHeader, TableRow } from "./components";
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
    return <S.WarningText>Carregando...</S.WarningText>;
  }

  if (hasErrors) {
    return (
      <S.WarningText>
        Algo deu errado. <br />
        Tente novamente mais tarde.
      </S.WarningText>
    );
  }

  return (
    <S.Main>
      <S.HeadingAndSearchContainer>
        <S.Heading>Funcionários</S.Heading>
        <Search onChange={handleSearch} value={search} />
      </S.HeadingAndSearchContainer>
      {!filteredEmployees.length ? (
        <S.WarningText>
          Não foi possível encontrar funcionários com o termo <i>"{search}"</i>
        </S.WarningText>
      ) : (
        <S.Table>
          <TableHeader />
          <S.TableBody>
            {filteredEmployees.map((employee: Employee) => (
              <TableRow employee={employee} key={employee.name} />
            ))}
          </S.TableBody>
        </S.Table>
      )}
    </S.Main>
  );
}

export default Home;
