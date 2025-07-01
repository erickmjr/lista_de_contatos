import styled from 'styled-components';

export const PosicionamentoBotaoTrocarPagina = styled.div`
    position: fixed;
    bottom: 10dvh;
    left: 5dvh;
    z-index: 1000;

    @media (max-width: 600px) {
        left: 2dvh;
        bottom: 7dvh;
    }
`;
