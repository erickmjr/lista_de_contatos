import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BotaoAlterarContatoStyled = styled.button`
    all: unset;

    background-color: ${variaveis.corH1};
    color: ${variaveis.corTexto};
    border: 1px solid ${variaveis.corTexto};
    padding: 1.5dvh;
    font-weight: 600;

    border-radius: 8px 0;
`;
