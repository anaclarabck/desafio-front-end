import styled from "styled-components";
import { colors } from "@/constants";
import { baseHeading2Styles, baseHeading3Styles } from "@/styles";

const TableRow = styled.tr<{ collapsed?: boolean }>`
  align-items: center;
  box-shadow: ${(props) =>
    props.collapsed
      ? "0px 1px 2px 0px #00000033 inset"
      : "0px 1px 2px 0px #00000033"};
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 16px;
`;

const TableCell = styled.td`
  ${baseHeading2Styles}
`;

const TableCellWrapper = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const TableButtonCollapseData = styled.td`
  ${baseHeading3Styles}
`;

const TablePhoto = styled.img`
  height: 34px;
  border-radius: 50%;
`;

const CollapsedContainer = styled.td`
  box-shadow: 0px 0px 1px 0px #00000033 inset;
  display: flex;
  flex-direction: column;
  height: 88px;
  justify-content: space-between;
  padding: 20px 0 32px 0;
`;

const CollapsedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 1px; /* Espaço para o pseudo-elemento */
  margin-inline: 16px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px dashed ${colors.grayMedium};
    pointer-events: none;
  }
`;

const CollapsedTitle = styled.h2`
  ${baseHeading2Styles}
  margin: 0;
`;

const CollapsedData = styled.h3`
  ${baseHeading3Styles}
  margin: 0;
`;

export {
  TableRow,
  TableCellWrapper,
  TableCell,
  TablePhoto,
  TableButtonCollapseData,
  CollapsedContainer,
  CollapsedWrapper,
  CollapsedTitle,
  CollapsedData,
};
