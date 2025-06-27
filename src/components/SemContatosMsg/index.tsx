import {
    ContainerImagemVisualizacao,
    ContainerSemContatosMsg,
    ImagemVisualizacao,
} from './styles';

import alone from '../../public/images/alone.svg';

const SemContatosMsg = () => {
    return (
        <>
            <ContainerSemContatosMsg>
                <h2>
                    Looks like you're all alone... add some friends before
                    talking to yourself!
                </h2>
                <ContainerImagemVisualizacao>
                    <ImagemVisualizacao
                        src={alone}
                        alt="Alone person ilustration"
                    />
                </ContainerImagemVisualizacao>
            </ContainerSemContatosMsg>
        </>
    );
};

export default SemContatosMsg;
