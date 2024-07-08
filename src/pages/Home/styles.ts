import { colors } from "@/constants";
import { Heading1 } from "@/styles";
import styled from "styled-components";

const Section = styled.section`
  @media (min-width: 376px) {
    padding: 0 32px;
  }

  padding: 0 20px;
`;

const HeadingAndSearchContainer = styled.div`
  @media (min-width: 376px) {
    display: flex;
    margin-bottom: 32px;
    margin-top: 32px;
    justify-content: space-between;
    width: 100%;
  }

  margin-bottom: 20px;
  margin-top: 20px;
`;

const Heading = styled(Heading1)`
  @media (min-width: 376px) {
    margin-bottom: auto;
    margin-top: auto;
  }
  margin-bottom: 28px;
  margin-top: 20px;
`;

const Table = styled.table`
  border: 1px;
  border-collapse: collapse;
  // frame: void;
  rules: rows;
  width: 100%;
`;

const TableBody = styled.tbody`
  background: ${colors.white};
  border-radius: 0px 0px 5px 5px;
`;

export { Section, HeadingAndSearchContainer, Heading, Table, TableBody };
