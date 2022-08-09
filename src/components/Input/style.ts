import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerInput = styled.div`
  width: 60%;
  border-radius: ${({ theme }) => theme.sizes.md};
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.sizes.xs + " " + theme.sizes.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BaseInput = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.sm};
  font-family: Titillium Web;
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  &::hover {
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: ${({ theme }) => theme.sizes.sm};
  height: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.colors.red};
`;
