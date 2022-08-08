import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.lg};
  flex-wrap: wrap;
  max-height: calc(100vh - 320px);
  overflow: auto;
  justify-self: flex-end;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
