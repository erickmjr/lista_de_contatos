import { useNavigate } from 'react-router-dom';
import { BotaoStyled } from './styles';

interface NavButtonProps {
    to: string;
    children: React.ReactNode;
}

const BotaoTrocarPagina = ({ to, children }: NavButtonProps) => {
    const navigate = useNavigate();

    return <BotaoStyled onClick={() => navigate(to)}>{children}</BotaoStyled>;
};

export default BotaoTrocarPagina;
