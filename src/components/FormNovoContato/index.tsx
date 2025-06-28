import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { adicionar } from '../../redux/reducers/contatos';

import BotaoAlterarContato from '../BotaoAlterarContato';
import { ContainerBotoes, ContainerInputs, FormContatoStyled } from './styles';

import addUser from '../../public/icons/addUser.svg';
import circleX from '../../public/icons/circleX.svg';
import MensagemValidacao from '../MensagemValidacao';

const FormNovoContato = () => {
    const dispatch = useDispatch();

    const [nomeLocal, setNomeLocal] = useState('');
    const [emailLocal, setEmailLocal] = useState('');
    const [numeroLocal, setNumeroLocal] = useState('');

    function cancelarEdicao() {
        setNomeLocal('');
        setEmailLocal('');
        setNumeroLocal('');
    }

    function verificarNome() {
        return nomeLocal.length >= 2;
    }

    function verificarEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailLocal.toLowerCase());
    }

    function verificarNumero() {
        return numeroLocal.length === 11;
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
                        onClick={() => {
                            if (
                                verificarEmail() &&
                                verificarNome() &&
                                verificarNumero()
                            ) {
                                dispatch(
                                    adicionar({
                                        nome: nomeLocal,
                                        email: emailLocal,
                                        numero: numeroLocal,
                                    }),
                                );
                                cancelarEdicao();
                            } else {
                                <MensagemValidacao
                                    sucesso={false}
                                    mensagem="Make sure to fill all fields correctly before adding a contact."
                                />;
                            }
                        }}
                        imagem={addUser}
                    />
                    <BotaoAlterarContato
                        imagem={circleX}
                        onClick={() => {
                            cancelarEdicao();
                        }}
                    />
                </ContainerBotoes>
            </FormContatoStyled>
            <MensagemValidacao
                sucesso={false}
                mensagem="Make sure to fill all fields correctly before adding a contact."
            />
        </>
    );
};

export default FormNovoContato;
