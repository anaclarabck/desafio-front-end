import { colors } from "@/constants";
import { baseHeading3Styles } from "@/styles";
import styled from "styled-components";

const InputArea = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;

  @media (min-width: 640px) {
    width: 286px;
  }
`;

const Input = styled.input`
  ${baseHeading3Styles}

  background-color: ${colors.white};
  border: 1px solid ${colors.grayMedium};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${colors.grayDark};
  height: 48px;
  padding: 10px 40px 10px 10px;
  width: 100%;

  @media (min-width: 640px) {
    min-width: 258px;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 10px;
`;

export { Input, InputArea, IconWrapper };
