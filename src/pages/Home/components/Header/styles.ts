import { colors } from "@/constants";
import styled from "styled-components";

const HeaderDiv = styled.div`
  @media (min-width: 640px) {
    padding-left: 32px;
  }

  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px 0px #00000033;
  display: flex;
  height: 60px;
  padding-left: 20px;
`;

export { HeaderDiv };
