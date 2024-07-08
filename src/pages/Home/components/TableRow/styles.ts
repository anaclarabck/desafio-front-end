import styled from "styled-components";
import { colors } from "@/constants";
import { baseHeading2Styles, baseHeading3Styles } from "@/styles";

const TableRow = styled.tr<{ $iscollapsed?: string }>`
  @media (min-width: 640px) {
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }

  align-items: center;
  box-shadow: ${(props) =>
    props.$iscollapsed === "true" ? "none" : "0px 1px 2px 0px #00000033"};
  display: grid;
  grid-template-columns: 50px 1fr 20px;
  height: 60px;
  padding: 0 16px;
  transition: box-shadow 0.5s ease-out;
`;

const TableCell = styled.td`
  ${baseHeading2Styles}
  @media (min-width: 640px) {
    text-align: left;
  }

  text-align: center;
`;

const TableCellPhoto = styled.td`
  text-align: left;
`;

const TableCellWrapper = styled.td`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const TableButtonCollapseData = styled.td`
  ${baseHeading3Styles}
`;

const TablePhoto = styled.img`
  height: 34px;
  border-radius: 50%;
  object-fit: contain;
  vertical-align: middle;
`;

const CollapsedContainer = styled.tr<{ $iscollapsed: string }>`
  box-shadow: 0px 1px 2px 0px #00000033;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$iscollapsed === "true" ? "88px" : "0")};
  overflow: hidden;
  padding: ${(props) =>
    props.$iscollapsed === "true" ? "20px 0 32px 0" : "0"};
  transition: height 0.5s ease-out, padding 0.5s ease-out;
`;

const CollapsedWrapper = styled.td`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1px;
  position: relative;
  margin-bottom: 16px;
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
  TableCellPhoto,
  TableCell,
  TablePhoto,
  TableButtonCollapseData,
  CollapsedContainer,
  CollapsedWrapper,
  CollapsedTitle,
  CollapsedData,
};
