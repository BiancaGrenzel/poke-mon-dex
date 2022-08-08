import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.xxxl};
  padding: ${({ theme }) => theme.sizes.md + " " + theme.sizes.xxxxl};
  margin: ${({ theme }) => "0px 0px " + theme.sizes.xxl + " 0px"};
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.36);
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.sizes.xxl};
  height: ${({ theme }) => theme.sizes.xxl};
`;

export const SynviaImage = styled.img`
  width: ${({ theme }) => theme.sizes.xl};
  height: ${({ theme }) => theme.sizes.xl};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.md};
  cursor: pointer;
`;
