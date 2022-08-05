import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.sizes.xxxxl};
  height: ${({ theme }) => theme.sizes.xxxxl};
  border-radius: ${({ theme }) => theme.sizes.xs};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.sizes.sm};
  border: none;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledObject = styled.object`
  max-width: 100%;
  max-height: 100%;
`;
