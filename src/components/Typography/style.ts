import styled, { css } from "styled-components";

const variantModifiers = {
  title: () => css`
    font-size: ${({ theme }) => theme.sizes.xl};
  `,
  subtitle: () => css`
    font-size: ${({ theme }) => theme.sizes.md};
  `,
  body: () => css`
    font-size: ${({ theme }) => theme.sizes.sm};
  `,
};

const colorModifiers = {
  red: () => css`
    color: ${({ theme }) => theme.colors.red};
  `,
  white: () => css`
    color: ${({ theme }) => theme.colors.white};
  `,
  black: () => css`
    color: ${({ theme }) => theme.colors.black};
  `,
  gray: () => css`
    color: ${({ theme }) => theme.colors.darkGray};
  `,
};

const weightModifiers = {
  light: () => css`
    font-weight: ${({ theme }) => theme.fontWeights.light};
  `,
  normal: () => css`
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  `,
  bold: () => css`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
};

export type StyledTypographyProps = {
  variant?: "title" | "subtitle" | "body";
  color?: "red" | "white" | "black" | "gray";
  weight?: "light" | "normal" | "bold";
};

export const StyledTypography = styled.p<StyledTypographyProps>`
  ${({ variant }) => variant && variantModifiers[variant]};
  ${({ color }) => color && colorModifiers[color]};
  ${({ weight }) => weight && weightModifiers[weight]};
  margin: 0;
  font-family: Titillium Web;
`;
