import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { adicionar } from '../../redux/reducers/contatos';

import BotaoAlterarContato from '../BotaoAlterarContato';
import { ContainerBotoes, ContainerInputs, FormContatoStyled } from './styles';

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

    function verificarNome() {
        return nomeLocal.trim().length >= 2;
    }

    function verificarEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailLocal.toLowerCase());
    }

    function verificarNumero() {
        return numeroLocal.trim().length === 11;
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
                        className={!verificarNome() ? 'campoErro' : ''}
                        placeholder="Type contact's name here..."
                    />
                    <label htmlFor="emailInput">E-mail</label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmailLocal(e.target.value);
                        }}
                        value={emailLocal}
                        id="emailInput"
                        className={!verificarEmail() ? 'campoErro' : ''}
                        placeholder="janedoe@example.com"
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
                            !verificarNumero()
                                ? 'campoErro no-spinners'
                                : 'no-spinners'
                        }
                        placeholder="00 00000-0000"
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
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    'Please fill all fields before adding a contact',
                                );
                                setContadorMensagem((prev) => prev + 1);
                            } else if (!verificarNome()) {
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    'Name must have at least 2 characters.',
                                );
                                setContadorMensagem((prev) => prev + 1);
                                return;
                            } else if (!verificarEmail()) {
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    'Enter a valid e-mail address.',
                                );
                                setContadorMensagem((prev) => prev + 1);
                                return;
                            } else if (!verificarNumero()) {
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    'Phone number must have 11 digits.',
                                );
                                setContadorMensagem((prev) => prev + 1);
                                return;
                            } else if (emailJaExiste) {
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    `"${emailLocal}" already exists in your contact list`,
                                );
                                setContadorMensagem((prev) => prev + 1);
                                return;
                            } else if (numeroJaExiste) {
                                setMostrarMensagem(true);
                                setStatusMensagem(false);
                                setMensagemLocal(
                                    `"${numeroLocal}" already exists in your contact list`,
                                );
                                setContadorMensagem((prev) => prev + 1);
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
                                setMostrarMensagem(true);
                                setStatusMensagem(true);
                                setMensagemLocal('Contact added!');
                                setContadorMensagem((prev) => prev + 1);
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
