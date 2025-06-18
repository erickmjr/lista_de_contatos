import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';
import Footer from '../../components/footer';
import BarraTopo from '../../containers/BarraTopo';
import ListaDeContatos from '../../containers/ListaDeContatos';
import { PosicionamentoBotaoTrocarPagina } from './styles';

const Visualizacao = () => {
    return (
        <>
            <BarraTopo
                Botao={
                    <BotaoTrocarPagina
                        to="/"
                        children={'Return to initial page'}
                    />
                }
            />

            <ListaDeContatos />

            <PosicionamentoBotaoTrocarPagina>
                <BotaoTrocarPagina to="/cadastro" children={'Add a contact'} />
            </PosicionamentoBotaoTrocarPagina>

            <Footer
                hrefLink="https://github.com/erickmjr/lista_de_contatos"
                content={"Project's respository"}
            />
        </>
    );
};

export default Visualizacao;
