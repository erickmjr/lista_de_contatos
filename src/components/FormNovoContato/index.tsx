import BotaoAddRemoverContato from '../BotaoAlterarContato';
import { ContainerBotoes, ContainerInputs, FormContatoStyled } from './styles';
import addUser from '../../public/icons/addUser.svg';
import circleX from '../../public/icons/circleX.svg';

const FormNovoContato = () => {
    return (
        <>
            <FormContatoStyled>
                <ContainerInputs>
                    <label htmlFor="nome">Name</label>
                    <input type="text" id="nome" />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                    <label htmlFor="number">Phone number</label>
                    <input type="tel" id="number" />
                </ContainerInputs>

                <ContainerBotoes>
                    <BotaoAddRemoverContato imagem={<img src={addUser} />} />
                    <BotaoAddRemoverContato imagem={<img src={circleX} />} />
                </ContainerBotoes>
            </FormContatoStyled>
        </>
    );
};

export default FormNovoContato;
