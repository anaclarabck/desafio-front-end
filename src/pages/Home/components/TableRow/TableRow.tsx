import { useState } from "react";
import { DownIcon, UpIcon } from "@/assets";
import { mediaSizes } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { Employee } from "@/types";
import { formatDate, formatPhoneNumber } from "@/utils";
import * as S from "./styles";

type TableRowProps = {
  employee: Employee;
};

function TableRow(props: TableRowProps) {
  const { employee } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const mediaSize = parseInt(mediaSizes.sm);
  const admissionDate = formatDate(employee.admission_date);
  const phoneNumber = formatPhoneNumber(employee.phone);

  return (
    <>
      <S.TableRow $iscollapsed={collapsed.toString()}>
        <S.TableCell>
          <S.TablePhoto src={employee.image} alt={`Foto de ${employee.name}`} />
        </S.TableCell>
        <S.TableCell>{employee.name}</S.TableCell>
        {width > mediaSize ? (
          <>
            <S.TableCell>{employee.job}</S.TableCell>
            <S.TableCell>{admissionDate}</S.TableCell>
            <S.TableCell>{phoneNumber}</S.TableCell>
          </>
        ) : (
          <S.TableCell onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <UpIcon /> : <DownIcon />}
          </S.TableCell>
        )}
      </S.TableRow>
      <S.CollapsedContainer $iscollapsed={collapsed.toString()}>
        <S.CollapsedWrapper>
          <S.CollapsedTitle>Cargo</S.CollapsedTitle>
          <S.CollapsedData>{employee.job}</S.CollapsedData>
        </S.CollapsedWrapper>
        <S.CollapsedWrapper>
          <S.CollapsedTitle>Data de admissão</S.CollapsedTitle>
          <S.CollapsedData>{admissionDate}</S.CollapsedData>
        </S.CollapsedWrapper>
        <S.CollapsedWrapper>
          <S.CollapsedTitle>Telefone</S.CollapsedTitle>
          <S.CollapsedData>{phoneNumber}</S.CollapsedData>
        </S.CollapsedWrapper>
      </S.CollapsedContainer>
    </>
  );
}

export default TableRow;
