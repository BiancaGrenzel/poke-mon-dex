import styled from "styled-components";

export const StyledFilterChip = styled.button`
  width: auto;
  color: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.sizes.xs + " " + theme.sizes.sm};
  border-radius: ${({ theme }) => theme.sizes.xl};
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
