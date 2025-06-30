import { useDispatch, useSelector } from 'react-redux';

import {
    ContainerBotoesEdicao,
    ContainerCard,
    ContainerEmail,
    ContainerNome,
    ContainerTelefone,
    InfosContato,
} from './styles';

import mail from '../../public/icons/mail.svg';
import trash from '../../public/icons/trash.svg';
import phone from '../../public/icons/phone.svg';
import pencil from '../../public/icons/pencil.svg';
import pencilOff from '../../public/icons/pencil-off.svg';
import save from '../../public/icons/save.svg';

import { editar, remover } from '../../redux/reducers/contatos';
import { useState } from 'react';

import type Contato from '../../models/Contato';
import BotaoAlterarContato from '../BotaoAlterarContato';
import type { RootReducer } from '../../redux/store';

import MensagemValidacao from '../MensagemValidacao';

type Props = Contato;

const ContatoCard = ({ nome, email, numero, id }: Props) => {
    const dispatch = useDispatch();
    const [estaEditando, setEstaEditando] = useState(false);
    const [nomeEditado, setNomeEditado] = useState(nome);
    const [emailEditado, setEmailEditado] = useState(email);
    const [numeroEditado, setNumeroEditado] = useState(numero);
    const [exibirMensagem, setExibirMensagem] = useState(false);
    const [statusMensagem, setStatusMensagem] = useState(false);
    const [textoMensagem, setTextoMensagem] = useState('');
    const [contadorMensagem, setContadorMensagem] = useState(0);

    const emailJaExiste = useSelector((state: RootReducer) =>
        state.contatos.some((contato) => contato.email === emailEditado),
    );

    const numeroJaExiste = useSelector((state: RootReducer) =>
        state.contatos.some((contato) => contato.numero === numeroEditado),
    );

    function cancelarEdicao() {
        setEstaEditando(false);
        setNomeEditado(nome);
        setEmailEditado(email);
        setNumeroEditado(numero);
    }

    return (
        <>
            <ContainerCard>
                <InfosContato>
                    <ContainerNome>
                        <input
                            id="nome"
                            type="text"
                            value={nomeEditado}
                            disabled={!estaEditando}
                            onChange={(e) => setNomeEditado(e.target.value)}
                        />
                    </ContainerNome>
                    <ContainerEmail>
                        <img src={mail} />
                        <input
                            id="email"
                            type="text"
                            value={emailEditado}
                            disabled={!estaEditando}
                            onChange={(e) => setEmailEditado(e.target.value)}
                        />
                    </ContainerEmail>
                    <ContainerTelefone>
                        <img src={phone} />
                        <input
                            type="text"
                            maxLength={11}
                            pattern="\d*"
                            value={numeroEditado}
                            disabled={!estaEditando}
                            inputMode="numeric"
                            onChange={(e) => {
                                const valor = e.target.value;
                                if (/^\d*$/.test(valor)) {
                                    setNumeroEditado(valor);
                                }
                            }}
                        />
                    </ContainerTelefone>
                </InfosContato>
                <ContainerBotoesEdicao>
                    {!estaEditando ? (
                        <>
                            <BotaoAlterarContato
                                onClick={() =>
                                    dispatch(
                                        remover({
                                            nome,
                                            email,
                                            numero,
                                            id,
                                        }),
                                    )
                                }
                                imagem={trash}
                            />
                            <BotaoAlterarContato
                                onClick={() => setEstaEditando(true)}
                                imagem={pencil}
                            />
                        </>
                    ) : (
                        <>
                            <BotaoAlterarContato
                                onClick={() => {
                                    if (
                                        nomeEditado.length === 0 &&
                                        emailEditado.length === 0 &&
                                        numeroEditado.length === 0
                                    ) {
                                        setExibirMensagem(true);
                                        setStatusMensagem(true);
                                        setTextoMensagem(
                                            'Make sure to fill all fields before saving',
                                        );
                                        setContadorMensagem((prev) => prev + 1);
                                        return;
                                    } else if (numeroJaExiste) {
                                        setExibirMensagem(true);
                                        setStatusMensagem(true);
                                        setTextoMensagem(
                                            `"${numeroEditado}" already exists in your list.`,
                                        );
                                        setContadorMensagem((prev) => prev + 1);
                                        return;
                                    } else if (emailJaExiste) {
                                        setExibirMensagem(true);
                                        setStatusMensagem(true);
                                        setTextoMensagem(
                                            `"${emailEditado}" already exists in your list.`,
                                        );
                                        setContadorMensagem((prev) => prev + 1);
                                        return;
                                    } else {
                                        dispatch(
                                            editar({
                                                nome: nomeEditado,
                                                email: emailEditado,
                                                numero: numeroEditado,
                                                id,
                                            }),
                                        );
                                        setEstaEditando(false);
                                        setExibirMensagem(true);
                                        setStatusMensagem(false);
                                        setTextoMensagem('Edit saved!');
                                        setContadorMensagem((prev) => prev + 1);
                                        return;
                                    }
                                }}
                                imagem={save}
                            />
                            <BotaoAlterarContato
                                onClick={() => cancelarEdicao()}
                                imagem={pencilOff}
                            />
                        </>
                    )}
                    {exibirMensagem && (
                        <MensagemValidacao
                            key={`${textoMensagem}-${contadorMensagem}`}
                            sucesso={statusMensagem}
                            mensagem={textoMensagem}
                        />
                    )}
                </ContainerBotoesEdicao>
            </ContainerCard>
        </>
    );
};

export default ContatoCard;
