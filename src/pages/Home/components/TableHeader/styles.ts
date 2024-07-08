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
  @media (min-width: 640px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }

  align-items: center;
  box-shadow: 0px 1px 2px 0px #00000033;
  display: grid;
  grid-template-columns: 50px 1fr 20px;
  height: 49px;
  padding: 0 16px;
`;

const TableHeaderData = styled.th`
  @media (min-width: 640px) {
    text-align: left;
  }

  ${baseHeading2Styles}
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
`;

const TableHeaderCircle = styled.span`
  background-color: ${colors.white};
  border-radius: 50%;
  display: inline-block;
  height: 8px;
  width: 8px;
`;

export { TableHeader, TableHeaderRow, TableHeaderData, TableHeaderCircle };
