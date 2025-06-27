import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { adicionar } from '../../redux/reducers/contatos';

import BotaoAlterarContato from '../BotaoAlterarContato';
import { ContainerBotoes, ContainerInputs, FormContatoStyled } from './styles';

import addUser from '../../public/icons/addUser.svg';
import circleX from '../../public/icons/circleX.svg';

const FormNovoContato = () => {
    const dispatch = useDispatch();

    const [nomeLocal, setNomeLocal] = useState('');
    const [emailLocal, setEmailLocal] = useState('');
    const [numeroLocal, setNumeroLocal] = useState('');
    function cancelarAdicao() {
        setNomeLocal('');
        setEmailLocal('');
        setNumeroLocal('');
    }

    return (
        <>
            <FormContatoStyled>
                <ContainerInputs>
                    <label htmlFor="nome">Name</label>
                    <input
                        type="text"
                        id="nome"
                        onChange={(e) => setNomeLocal(e.target.value)}
                        value={nomeLocal}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmailLocal(e.target.value)}
                        value={emailLocal}
                    />
                    <label htmlFor="number">Phone number</label>
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
                        className="no-spinners"
                    />
                </ContainerInputs>

                <ContainerBotoes>
                    <BotaoAlterarContato
                        onClick={() => {
                            if (
                                nomeLocal.length > 0 &&
                                emailLocal.length > 0 &&
                                numeroLocal.length === 11
                            ) {
                                dispatch(
                                    adicionar({
                                        nome: nomeLocal,
                                        email: emailLocal,
                                        numero: numeroLocal,
                                    }),
                                );
                                cancelarAdicao();
                            } else {
                                alert('Phone number must have 11 digits.');
                            }
                        }}
                        imagem={addUser}
                    />
                    <BotaoAlterarContato
                        imagem={circleX}
                        onClick={() => {
                            cancelarAdicao();
                        }}
                    />
                </ContainerBotoes>
            </FormContatoStyled>
        </>
    );
};

export default FormNovoContato;
