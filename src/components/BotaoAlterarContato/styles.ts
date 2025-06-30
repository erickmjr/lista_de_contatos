import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BotaoAlterarContatoStyled = styled.button`
    all: unset;

    background-color: ${variaveis.corH1};
    color: ${variaveis.corTexto};
    border: 2px solid ${variaveis.black1};
    padding: 1.5dvh;
    font-weight: 600;

    border-radius: 8px 0;

    @media (max-width: 600px) {
        padding: 1dvh;
        max-width: fit-content;
    }
`;
