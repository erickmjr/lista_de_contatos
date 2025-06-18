import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const FormContatoStyled = styled.form`
    background-color: ${variaveis.black1};
    display: flex;
    flex-direction: column;
    gap: 2dvh;
    text-align: center;
    width: 40dvh;

    padding: 4dvh;

    border-radius: 0 8px 0 8px;
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25dvh;

    label {
        text-align: left;
        color: ${variaveis.corTexto};
    }

    button {
        padding: 1dvh;
    }

    input {
        all: unset;
        text-align: left;
        background-color: ${variaveis.black1};

        font-size: 2dvh;

        border: 1px solid ${variaveis.corTexto};

        padding: 1.2dvh;

        color: ${variaveis.corH1};

        border-radius: 8px 8px 0 8px;
    }
`;

export const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-around;
`;
