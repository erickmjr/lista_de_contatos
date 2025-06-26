import { BotaoExcluirStyled } from './styles';
import trash from '../../public/icons/trash.svg';

const BotaoExcluirSalvarContato = () => (
    <BotaoExcluirStyled type="button">
        <img src={trash} alt="trash" />
    </BotaoExcluirStyled>
);

export default BotaoExcluirSalvarContato;
