import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 192px;
    height: auto;
    gap: ${({ theme }) => theme.sizes.xs};
`

export const BoxChips = styled.div`
    display: flex;
    gap: 8px;
`