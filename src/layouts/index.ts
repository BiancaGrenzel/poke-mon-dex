import styled from "styled-components";
import { FlexDirection, FlexWrap, Gap, JustifyContent } from "./types";
import * as Theme from "../styles/tokens/index";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => "0px " + theme.sizes.xxxxl};
  gap: ${({ theme }) => theme.sizes.md};
`;

export type BoxProps = {
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  gap?: Gap;
  width?: string;
  flexWrap?: FlexWrap;
};

const verifyGap = (gap: Gap) => {
  switch (gap) {
    case "xs":
      return Theme.sizes.xs;
    case "sm":
      return Theme.sizes.sm;
    case "md":
      return Theme.sizes.md;
    case "lg":
      return Theme.sizes.lg;
    case "xl":
      return Theme.sizes.xl;
    case "xxl":
      return Theme.sizes.xxl;
    case "xxxl":
      return Theme.sizes.xxxl;
    default:
      return Theme.sizes.md;
  }
};

export const Box = styled.div(
  ({ justifyContent, flexDirection, gap, width, flexWrap }: BoxProps) => ({
    display: "flex",
    flexDirection: flexDirection ? flexDirection : "row",
    justifyContent: justifyContent ? justifyContent : "initial",
    gap: gap ? verifyGap(gap) : Theme.sizes.md,
    width: width ? width : "initial",
    flexWrap: flexWrap
  })
);
