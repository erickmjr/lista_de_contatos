import { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${variaveis.fontePrincipal};
        list-style: none;
    }
`;

export default EstiloGlobal;
