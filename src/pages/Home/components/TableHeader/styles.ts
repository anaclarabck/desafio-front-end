import styled from "styled-components";
import { colors } from "@/constants";
import { baseHeading2Styles } from "@/styles";

const TableHeader = styled.thead`
  background: linear-gradient(
    180deg,
    ${colors.blueDark} 0%,
    ${colors.blueLight} 100%
  );
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 1px 2px 0px #00000033;
  height: 47px;
`;

const TableHeaderRow = styled.tr`
  @media (min-width: 376px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }

  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  // col-group: 1fr 2fr 1fr 1fr 1fr 1fr;
`;

const TableHeaderData = styled.th`
  ${baseHeading2Styles}
  text-transform: uppercase;
  text-align: left;
  color: ${colors.white};
`;

const TableHeaderCircle = styled.span`
  background-color: ${colors.white};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
`;

export { TableHeader, TableHeaderRow, TableHeaderData, TableHeaderCircle };
