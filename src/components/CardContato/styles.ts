import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${variaveis.corH1};
    padding: 2dvh;
    border-radius: 8px 0 8px 0;
`;

export const InfosContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1dvh;

    input {
        all: unset;
        resize: none;
        padding: 0.75dvh;
        color: ${variaveis.backgroundColor};
        width: 100%;
        font-size: 2dvh;
        cursor: text;
        border: 2px solid ${variaveis.corH1};
        border-radius: 8px;
    }

    input:focus {
        border: 2px solid ${variaveis.backgroundColor};
    }
`;

export const ContainerNome = styled.div`
    input {
        font-size: 3dvh;
        font-weight: 700;
    }
`;

export const ContainerEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;
    font-weight: 500;
`;
export const ContainerTelefone = styled.div`
    display: flex;
    align-items: center;
    gap: 1dvh;
    font-weight: 500;
`;
