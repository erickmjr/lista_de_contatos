import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerPopUpForm = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;

    background-color: ${variaveis.verde1};
    color: ${variaveis.corH1};
    font-size: 2dvh;
    position: absolute;
    bottom: 10dvh;
    left: 3dvh;
    border-radius: 8px 0 8px 0;
    padding: 1dvh 2dvh;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;

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
    }

    h3 {
        font-size: 2dvh;
        padding: 1dvh;
        margin: 0;
    }
`;
