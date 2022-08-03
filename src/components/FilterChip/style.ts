import styled from "styled-components";

export const StyledFilterChip = styled.button`
  width: auto;
  color: ${({ theme }) => theme.colors.red};
  padding: ${({ theme }) => theme.spaces.xs + " " + theme.spaces.sm};
  border-radius: ${({ theme }) => theme.spaces.xl};
  border: 1px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
