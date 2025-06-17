import {
    ContainerCard,
    ContainerEmail,
    ContainerNome,
    ContainerTelefone,
    InfosContato,
} from './styles';
import mail from '../../public/icons/mail.svg';
import phone from '../../public/icons/phone.svg';
import BotaoExcluirContato from '../BotaoExcluir';

const CardContato = () => {
    return (
        <>
            <ContainerCard>
                <InfosContato>
                    <ContainerNome>
                        <input id="nome" defaultValue={'Erick Mello Junior'} />
                    </ContainerNome>
                    <ContainerEmail>
                        <img src={mail} />
                        <input
                            id="email"
                            defaultValue={'erickmellojr@gmail.com'}
                        />
                    </ContainerEmail>
                    <ContainerTelefone>
                        <img src={phone} />
                        <input id="tel" defaultValue={'(71)  98189-5660'} />
                    </ContainerTelefone>
                </InfosContato>
                <div>
                    <BotaoExcluirContato />
                </div>
            </ContainerCard>
        </>
    );
};

export default CardContato;
