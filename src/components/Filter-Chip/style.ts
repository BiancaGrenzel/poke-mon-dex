import styled from "styled-components";
import { FilterChipProps } from "./types";

export const StyledFilterChip = styled.button<FilterChipProps>`
  width: auto;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.red};
  padding: ${({ theme }) => theme.sizes.xs + " " + theme.sizes.sm};
  border-radius: ${({ theme }) => theme.sizes.xl};
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.red : props.theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
