import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';
import { NomeProjeto } from '../../pages/LandingPage/styles';
import { BarraTopoStyled } from './styles';

const BarraTopo = () => {
    return (
        <>
            <BarraTopoStyled>
                <NomeProjeto>CONTACT LIST</NomeProjeto>
                <BotaoTrocarPagina to="/" children={'Return to initial page'} />
            </BarraTopoStyled>
        </>
    );
};

export default BarraTopo;
