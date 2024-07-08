import styled from "styled-components";
import { colors } from "@/constants";
import { baseHeading2Styles, baseHeading3Styles } from "@/styles";

const TableRow = styled.tr<{ $iscollapsed?: string }>`
  @media (min-width: 376px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }

  align-items: center;
  box-shadow: ${(props) =>
    props.$iscollapsed === "true"
      ? "0px -1px 2px 0px #00000033"
      : "0px 1px 2px 0px #00000033"};
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 16px;
  transition: box-shadow 0.5s ease-out;
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
  object-fit: contain;
`;

const CollapsedContainer = styled.tr<{ $iscollapsed: string }>`
  box-shadow: 0px 1px 2px 0px #00000033;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$iscollapsed === "true" ? "88px" : "0")};
  overflow: hidden;
  transition: height 0.5s ease-out, padding 0.5s ease-out;
  padding: ${(props) =>
    props.$iscollapsed === "true" ? "20px 0 32px 0" : "0"};
  // padding: 20px 0 32px 0;
`;

const CollapsedWrapper = styled.td`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 1px;
  margin-inline: 16px;
  margin-bottom: 16px;

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
