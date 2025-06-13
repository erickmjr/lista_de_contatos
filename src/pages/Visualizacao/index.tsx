import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';

const Visualizacao = () => {
    return (
        <>
            <div className="container">
                <h1>Essa eh a tela de visualizacao/edicao da lista</h1>
                <BotaoTrocarPagina to="/" children={'Return to initial page'} />
            </div>
        </>
    );
};

export default Visualizacao;
