import { BotaoExcluirStyled } from './styles';
import trash from '../../public/icons/trash.svg';

const BotaoExcluirContato = () => (
    <BotaoExcluirStyled type="button">
        <img src={trash} alt="trash" />
    </BotaoExcluirStyled>
);

export default BotaoExcluirContato;
