import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Body = styled.div`
    background-color: ${variaveis.backgroundColor};
    color: ${variaveis.corTexto};
    padding: 10dvh;
    height: 100vh;
`;

export const ContainerLandingPage = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const ContainerHero = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5dvh;
`;

export const Call = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    h1 {
        font-size: 6dvh;
    }

    h2 {
        font-size: 4dvh;
    }
`;

export const ContainerImage = styled.div`
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 75%;
    overflow: hidden;
`;
