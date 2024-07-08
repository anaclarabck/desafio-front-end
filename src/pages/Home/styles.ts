import { colors } from "@/constants";
import { Heading1 } from "@/styles";
import styled from "styled-components";

const Section = styled.section`
  @media (min-width: 640px) {
    padding: 32px;
    max-width: 900px;
    margin: 0 auto;
  }

  padding: 20px;
`;

const HeadingAndSearchContainer = styled.div`
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 0;
    width: 100%;
  }

  margin: 20px 0;
`;

const Heading = styled(Heading1)`
  @media (min-width: 640px) {
    margin-bottom: auto;
    margin-top: auto;
  }
  margin-bottom: 28px;
  margin-top: 20px;
`;

const Table = styled.table`
  @media (min-width: 640px) {
    box-shadow: 0px 1px 2px 0px #00000033;
    border-radius: 8px 8px 0 0;
  }

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  border-width: 1px;
  overflow: hidden;
  width: 100%;
`;

const TableBody = styled.tbody`
  background: ${colors.white};
  border-radius: 0px 0px 5px 5px;
`;

const ColGroup = styled.colgroup`
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
  }
`;

const Col = styled.col``;

export {
  Section,
  HeadingAndSearchContainer,
  Heading,
  Table,
  TableBody,
  ColGroup,
  Col,
};
