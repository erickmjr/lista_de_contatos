import { useEffect, useState } from 'react';
import { ContainerPopUpForm } from './styles';

type PropsMensagemValidacao = {
    sucesso: boolean;
    mensagem: string;
};

const MensagemValidacao = ({ sucesso, mensagem }: PropsMensagemValidacao) => {
    const [visivel, setVisivel] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisivel(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <ContainerPopUpForm
                className={`${visivel ? '' : 'oculto'} ${!sucesso ? '' : 'erro'}`}
            >
                <button type="button" onClick={() => setVisivel(false)}>
                    X
                </button>
                <h3>{mensagem}</h3>
            </ContainerPopUpForm>
        </>
    );
};

export default MensagemValidacao;
