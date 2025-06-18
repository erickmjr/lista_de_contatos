import { BotaoAddRemoverStyled } from './styles';

interface BotaoAddRemoverProps {
    imagem: React.ReactNode;
}

const BotaoAddRemoverContato = ({ imagem }: BotaoAddRemoverProps) => (
    <BotaoAddRemoverStyled>{imagem}</BotaoAddRemoverStyled>
);

export default BotaoAddRemoverContato;
