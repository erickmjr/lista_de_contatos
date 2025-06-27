import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerSemContatosMsg = styled.div`
    padding: 4dvh;
    height: 100%;
    width: 80%;
    margin: auto;
    max-width: fit-content;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    h2 {
        display: flex;
        align-items: center;
        padding-top: 3dvh;
        font-size: 5dvh;
        color: ${variaveis.corH1};
        font-style: italic;
    }

    @media (max-width: 1266px) {
        margin-top: 10dvh;
    }

    @media (max-width: 768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        padding-top: 4dvh;
    }
`;

export const ContainerImagemVisualizacao = styled.div`
    margin: 0 auto;
    max-width: fit-content;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ImagemVisualizacao = styled.img`
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    @media (max-width: 768px) {
        max-width: 68%;
    }
`;
