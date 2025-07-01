import styled from 'styled-components';

export const ListaDeContatosStyled = styled.div`
    margin: 0 auto;
    width: 75%;
    max-height: 80dvh;
    padding: 3dvh;
    border-radius: 8px 0 8px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2dvh;
    overflow-y: scroll;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 2dvh;
        margin-bottom: 0;
        width: 100%;
        max-height: 68dvh;
    }

    @media (max-width: 600px) {
        max-height: 62dvh;
    }
`;
