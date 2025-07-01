import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BotaoStyled = styled.button`
    all: unset;
    font-size: 2dvh;
    background-color: ${variaveis.black1};
    color: ${variaveis.corH1};
    padding: 1.5dvh;
    width: 90%;
    cursor: pointer;
    width: fit-content;
    font-size: 2.5dvh;
    white-space: nowrap;
    border-radius: 8px 2px 8px 2px;
    font-weight: 700;

    @media (max-width: 600px) {
        background-color: ${variaveis.rosa1};
        color: ${variaveis.corH1};
    }
`;
