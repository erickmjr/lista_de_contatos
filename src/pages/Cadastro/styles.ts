import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ContainerAlinhamentoVertical = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 72.5dvh;
`;

export const FormTitle = styled.h2`
    font-size: 4dvh;
    font-weight: 500;
    color: ${variaveis.corH1};
    text-align: left;
`;
