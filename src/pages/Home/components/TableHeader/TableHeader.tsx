import { useWindowDimensions } from "@/hooks";
import { mediaSizes } from "@/constants";
import * as S from "./styles";

function TableHeader() {
  const { width } = useWindowDimensions();

  const mediaSize = parseInt(mediaSizes.sm);
  return (
    <S.TableHeader>
      <S.TableHeaderRow>
        <S.TableHeaderData>Foto</S.TableHeaderData>
        <S.TableHeaderData>Nome</S.TableHeaderData>
        {width > mediaSize ? (
          <>
            <S.TableHeaderData>Cargo</S.TableHeaderData>
            <S.TableHeaderData>Data de admissão</S.TableHeaderData>
            <S.TableHeaderData>Telefone</S.TableHeaderData>
          </>
        ) : (
          <S.TableHeaderData>
            <S.TableHeaderCircle />
          </S.TableHeaderData>
        )}
      </S.TableHeaderRow>
    </S.TableHeader>
  );
}

export default TableHeader;
