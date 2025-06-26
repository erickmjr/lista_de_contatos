import { ListaDeContatosStyled } from './styles';
import { useSelector } from 'react-redux';
import type { RootReducer } from '../../redux/store';
import ContatoCard from '../../components/ContatoCard';

const ListaDeContatos = () => {
    const { contatos } = useSelector((state: RootReducer) => state.contatos);

    return (
        <>
            <ListaDeContatosStyled>
                {contatos.map((contato) => (
                    <li key={contato.numero}>
                        <ContatoCard
                            nome={contato.nome}
                            email={contato.email}
                            numero={contato.numero}
                            id={contato.id}
                        />
                    </li>
                ))}
            </ListaDeContatosStyled>
        </>
    );
};

export default ListaDeContatos;
