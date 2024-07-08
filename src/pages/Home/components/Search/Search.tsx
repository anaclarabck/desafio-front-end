import { SearchIcon } from "@/assets";
import * as S from "./styles";

type SearchProps = {
  value: string;
  onChange: (search: string) => void;
};

function Search(props: SearchProps) {
  const { value, onChange } = props;

  return (
    <S.InputArea>
      <S.Input
        type="text"
        id="txtSearch"
        placeholder="Pesquisar"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.InputArea>
  );
}

export default Search;
