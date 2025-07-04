import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerPopUpForm = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;

    background-color: ${variaveis.verde1};
    color: ${variaveis.corH1};
    position: absolute;
    bottom: 10dvh;
    right: 3dvh;
    border-radius: 8px 0 8px 0;
    padding: 1dvh 2dvh;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    @media (max-width: 600px) {
        padding: 1.25dvh;
        width: fit-content;
        text-align: left;
        left: 2dvh;
        bottom: 15dvh;
    }

    &.erro {
        background-color: ${variaveis.vermelho1};
    }

    &.oculto {
        opacity: 0;
        pointer-events: none;
    }

    button {
        all: unset;
        background-color: ${variaveis.black1};
        border-radius: 6px;
        width: fit-content;
        padding: 0.5dvh 1dvh;
        font-weight: bold;
    }

    h3 {
        font-size: 2dvh;
        padding: 1dvh;
        margin: 0;
        text-align: start;

        @media (max-width: 600px) {
            font-size: 1.65dvh;
        }
    }
`;
