import styled from 'styled-components';

export const ListaDeContatosStyled = styled.div`
    margin: 0 auto;
    width: 75%;
    padding: 3dvh;
    border-radius: 8px 0 8px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2dvh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
