import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${variaveis.corH1};
    padding: 2dvh;
    border-radius: 8px 0 8px 0;
    border: 4px solid transparent;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1.25dvh;
        padding: 1dvh 2dvh;
    }

    &.estaEditando {
        border: 4px solid ${variaveis.corTexto};
    }
`;

export const InfosContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1dvh;
    width: 80%;

    input {
        background: none;
        border: none;
        outline: none;
        resize: none;
        resize: none;
        padding: 0.75dvh;
        color: ${variaveis.black1};
        -webkit-text-fill-color: ${variaveis.black1};
        opacity: 1;
        width: 80%;
        font-size: 2dvh;
        border: 2.5px solid transparent;
        border-radius: 8px;

        &.estaEditandoInput {
            border: 2.5px solid ${() => `rgba(50, 18, 55, 0.5)`};
        }
    }

    input:focus {
        border: 2.5px solid ${variaveis.backgroundColor};
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ContainerNome = styled.div`
    input {
        font-size: 3dvh;
        font-weight: 700;
        max-width: 100%;
        width: 100%;

        @media (max-width: 600px) {
            font-size: 2.5dvh;
        }
    }
`;

export const ContainerEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;
    font-weight: 500;

    input {
        max-width: 60%;

        @media (max-width: 600px) {
            max-width: 100%;
            width: 100%;
        }
    }
`;

export const ContainerTelefone = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;
    font-weight: 500;

    input {
        max-width: fit-content;
    }
`;

export const ContainerBotoesEdicao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1dvh;

    @media (max-width: 600px) {
        flex-direction: row;
        justify-content: start;
    }
`;
