import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const FooterStyled = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 2.25dvh;
    color: ${variaveis.corTexto};
    background-color: ${variaveis.black1};
    text-align: center;
    z-index: 100;

    @media (max-width: 600px) {
        padding: 1dvh;
    }
`;
