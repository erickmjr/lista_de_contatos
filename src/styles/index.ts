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

    body {
        background-color: ${variaveis.backgroundColor};
        height: 100dvh;
    }

    a {
        color: ${variaveis.corTexto};
        text-decoration: underline;
        cursor: pointer;
        letter-spacing: 0.35dvh;
    }
`;

export default EstiloGlobal;
