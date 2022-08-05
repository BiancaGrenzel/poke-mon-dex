import styled from "styled-components";

export const ContainerCards = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.sizes.lg};
    flex-wrap: wrap;
`