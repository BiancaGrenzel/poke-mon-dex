import styled from "styled-components";

export const HeartBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ theme }) => theme.sizes.xs};
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 192px;
  height: auto;
  gap: ${({ theme }) => theme.sizes.xs};
`;
