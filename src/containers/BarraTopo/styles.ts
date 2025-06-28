import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BarraTopoStyled = styled.div`
    width: 100dvw;
    background-color: ${variaveis.black1};
    padding: 2dvh 3dvh;

    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1dvh;
    }
`;
