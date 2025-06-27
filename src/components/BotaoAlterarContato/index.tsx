import { BotaoAlterarContatoStyled } from './styles';

interface BotaoAlterarProps {
    onClick: () => void;
    imagem: string;
}

const BotaoAlterarContato = ({ onClick, imagem }: BotaoAlterarProps) => {
    return (
        <>
            <BotaoAlterarContatoStyled type="button" onClick={onClick}>
                <img src={imagem} alt="Alternar edicao" />
            </BotaoAlterarContatoStyled>
        </>
    );
};

export default BotaoAlterarContato;
