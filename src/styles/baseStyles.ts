import { css } from "styled-components";
import { colors } from "@/constants";

const baseHeading1Styles = css`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${colors.blackNeutral};
`;

const baseHeading2Styles = css`
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.blackNeutral};
`;

const baseHeading3Styles = css`
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.blackNeutral};
`;

export { baseHeading1Styles, baseHeading2Styles, baseHeading3Styles };
