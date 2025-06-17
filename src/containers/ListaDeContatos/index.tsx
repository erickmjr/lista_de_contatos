import CardContato from '../../components/CardContato';
import { ListaDeContatosStyled } from './styles';

const ListaDeContatos = () => {
    return (
        <>
            <ListaDeContatosStyled>
                <CardContato />
                <CardContato />
                <CardContato />
                <CardContato />
            </ListaDeContatosStyled>
        </>
    );
};

export default ListaDeContatos;
