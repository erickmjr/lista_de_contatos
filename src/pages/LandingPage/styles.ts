import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Body = styled.div`
    color: ${variaveis.corTexto};
    padding: 10dvh;
    height: 100vh;

    @media (max-width: 600px) {
        padding: 3dvh;
    }
`;

export const ContainerLandingPage = styled.div`
    display: flex;
    align-items: center;
    height: 85%;
`;

export const ContainerHero = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5dvh;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 2.5dvh;
    }
`;

export const Call = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    h1 {
        font-size: 6dvh;
        white-space: nowrap;
        color: ${variaveis.corH1};
        font-weight: 700;
        font-style: italic;

        @media (max-width: 600px) {
            font-size: 5dvh;
        }
    }

    h2 {
        font-size: 4dvh;
        @media (max-width: 600px) {
            font-size: 3dvh;
        }
    }
`;

export const NomeProjeto = styled.h1`
    font-size: 6dvh;
    white-space: nowrap;
    color: ${variaveis.corH1};
    font-weight: 700;
    font-style: italic;

    @media (max-width: 600px) {
        font-size: 5dvh;
    }
`;

export const ContainerImage = styled.div`
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 75%;
    overflow: hidden;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 85%;
    }
`;
