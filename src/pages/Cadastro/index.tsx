import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';
import Footer from '../../components/footer';
import FormNovoContato from '../../components/FormNovoContato';
import BarraTopo from '../../containers/BarraTopo';
import { ContainerAlinhamentoVertical, FormTitle } from './styles';

const Cadastro = () => {
    return (
        <>
            <BarraTopo
                Botao={
                    <BotaoTrocarPagina
                        to="/visualizacao"
                        children={'Return to my contacts page'}
                    />
                }
            />
            <ContainerAlinhamentoVertical>
                <FormTitle>Add new contact</FormTitle>
                <FormNovoContato />
            </ContainerAlinhamentoVertical>

            <Footer
                hrefLink="https://github.com/erickmjr/lista_de_contatos"
                content={"Project's respository"}
            />
        </>
    );
};

export default Cadastro;
