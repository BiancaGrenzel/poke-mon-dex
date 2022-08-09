import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 128px);
  width: calc(100vw - 480px);
  gap: 32px;
  background-color: #f9f9f9;
  padding: 0px 240px;
  margin: -64px 0px 0px 0px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 710px;
  height: auto;
`;
