import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { adicionar } from '../../redux/reducers/contatos';

import BotaoAlterarContato from '../BotaoAlterarContato';
import { ContainerBotoes, ContainerInputs, FormContatoStyled } from './styles';

import {
    verificarNome,
    verificarEmail,
    verificarNumero,
} from '../../utils/validacoes';

import useLarguraDaTela from '../../utils/larguraTela';

import addUser from '../../public/icons/addUser.svg';
import circleX from '../../public/icons/circleX.svg';
import MensagemValidacao from '../MensagemValidacao';
import type { RootReducer } from '../../redux/store';

const FormNovoContato = () => {
    const dispatch = useDispatch();

    const [nomeLocal, setNomeLocal] = useState('');
    const [emailLocal, setEmailLocal] = useState('');
    const [numeroLocal, setNumeroLocal] = useState('');

    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagemLocal, setMensagemLocal] = useState('');
    const [statusMensagem, setStatusMensagem] = useState(false);
    const [contadorMensagem, setContadorMensagem] = useState(0);

    const larguraTela = useLarguraDaTela();

    const emailJaExiste = useSelector((state: RootReducer) =>
        state.contatos.some((contato) => contato.email === emailLocal),
    );
    const numeroJaExiste = useSelector((state: RootReducer) =>
        state.contatos.some((contato) => contato.numero === numeroLocal),
    );

    function cancelarEdicao() {
        setNomeLocal('');
        setEmailLocal('');
        setNumeroLocal('');
    }

    function exibirFeedback(mensagem: string, status: boolean) {
        if (larguraTela <= 600) {
            alert(mensagem);
        } else {
            setMostrarMensagem(true);
            setStatusMensagem(status);
            setMensagemLocal(mensagem);
            setContadorMensagem((prev) => prev + 1);
        }
    }

    return (
        <>
            <FormContatoStyled>
                <ContainerInputs>
                    <label htmlFor="nomeInput">Name</label>
                    <input
                        type="text"
                        onChange={(e) => setNomeLocal(e.target.value)}
                        value={nomeLocal}
                        id="nomeInput"
                        className={!verificarNome(nomeLocal) ? 'campoErro' : ''}
                        placeholder="Type contact's name here..."
                        autoComplete="name"
                    />
                    <label htmlFor="emailInput">E-mail</label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmailLocal(e.target.value);
                        }}
                        value={emailLocal}
                        id="emailInput"
                        className={
                            !verificarEmail(emailLocal) ? 'campoErro' : ''
                        }
                        placeholder="janedoe@example.com"
                        autoComplete="email"
                    />
                    <label htmlFor="telefoneInput">Phone number</label>
                    <input
                        type="text"
                        maxLength={11}
                        inputMode="numeric"
                        pattern="\d*"
                        value={numeroLocal}
                        onChange={(e) => {
                            const valor = e.target.value;
                            if (/^\d*$/.test(valor)) {
                                setNumeroLocal(valor);
                            }
                        }}
                        id="telefoneInput"
                        className={
                            !verificarNumero(numeroLocal)
                                ? 'campoErro no-spinners'
                                : 'no-spinners'
                        }
                        placeholder="00 00000-0000"
                        autoComplete="tel"
                    />
                </ContainerInputs>
                <ContainerBotoes>
                    <BotaoAlterarContato
                        imagem={addUser}
                        onClick={() => {
                            if (
                                nomeLocal.trim() === '' &&
                                numeroLocal.trim() === '' &&
                                emailLocal.trim() === ''
                            ) {
                                exibirFeedback(
                                    'Please fill all fields before adding a contact',
                                    false,
                                );
                            } else if (!verificarNome(nomeLocal)) {
                                exibirFeedback(
                                    'Name must have at least 2 characters.',
                                    false,
                                );
                                return;
                            } else if (!verificarEmail(emailLocal)) {
                                exibirFeedback('Invalid e-mail.', false);
                                return;
                            } else if (!verificarNumero(numeroLocal)) {
                                exibirFeedback(
                                    'Phone number must have 11 digits.',
                                    false,
                                );
                                return;
                            } else if (emailJaExiste) {
                                exibirFeedback(
                                    `"${emailLocal}" already exists`,
                                    false,
                                );
                                return;
                            } else if (numeroJaExiste) {
                                exibirFeedback(
                                    `"${numeroLocal}" already exists`,
                                    false,
                                );
                                return;
                            } else {
                                dispatch(
                                    adicionar({
                                        nome: nomeLocal,
                                        email: emailLocal,
                                        numero: numeroLocal,
                                    }),
                                );
                                cancelarEdicao();
                                exibirFeedback('Contact added!', true);
                            }
                        }}
                    />
                    <BotaoAlterarContato
                        imagem={circleX}
                        onClick={() => {
                            cancelarEdicao();
                        }}
                    />
                </ContainerBotoes>
                {mostrarMensagem && (
                    <MensagemValidacao
                        key={`${mensagemLocal}-${contadorMensagem}`}
                        sucesso={!statusMensagem}
                        mensagem={mensagemLocal}
                    />
                )}
            </FormContatoStyled>
        </>
    );
};

export default FormNovoContato;
