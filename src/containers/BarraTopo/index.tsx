import { NomeProjeto } from '../../pages/LandingPage/styles';
import { BarraTopoStyled } from './styles';

interface PropsBarraTopo {
    Botao: React.ReactNode;
}

const BarraTopo = ({ Botao }: PropsBarraTopo) => {
    return (
        <>
            <BarraTopoStyled>
                <NomeProjeto>CONTACT LIST</NomeProjeto>
                {Botao}
            </BarraTopoStyled>
        </>
    );
};

export default BarraTopo;
