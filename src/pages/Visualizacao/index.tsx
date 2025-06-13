import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';
import Footer from '../../components/footer';

const Visualizacao = () => {
    return (
        <>
            <div className="container">
                <h1>Essa eh a tela de visualizacao/edicao da lista</h1>
                <BotaoTrocarPagina to="/" children={'Return to initial page'} />
            </div>
            <Footer
                hrefLink="https://github.com/erickmjr/lista_de_contatos"
                content={"Project's respository"}
            />
        </>
    );
};

export default Visualizacao;
