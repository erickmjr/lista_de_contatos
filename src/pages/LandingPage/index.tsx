import * as S from './styles';
import search from '../../public/images/search.svg';
import BotaoTrocarPagina from '../../components/BotaoTrocarPagina';
import Footer from '../../components/footer';

const LandingPage = () => {
    return (
        <>
            <S.Body>
                <S.ContainerLandingPage>
                    <S.ContainerHero>
                        <S.Call>
                            <S.NomeProjeto>CONTACT LIST</S.NomeProjeto>
                            <h2>Your Contacts, Always Organized</h2>
                            <p>
                                Keep your phone book in one place. Add, edit,
                                and find contacts effortlessly -{' '}
                                <strong>anytime</strong>,
                                <strong> anywhere</strong>.
                            </p>
                            <BotaoTrocarPagina
                                to="/Visualizacao"
                                children={'Get started!'}
                            />
                        </S.Call>
                        <S.ContainerImage>
                            <S.Image src={search} alt="search" />
                        </S.ContainerImage>
                    </S.ContainerHero>
                </S.ContainerLandingPage>
            </S.Body>
            <Footer
                hrefLink="https://github.com/erickmjr"
                content={'Made by erickmjr'}
            />
        </>
    );
};

export default LandingPage;
