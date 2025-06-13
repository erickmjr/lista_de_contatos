import { FooterStyled } from './styles';

interface FooterProps {
    content: React.ReactNode;
    hrefLink: string;
}

const Footer = ({ hrefLink, content }: FooterProps) => {
    return (
        <>
            <FooterStyled>
                <a href={hrefLink} target="_blank">
                    {content}
                </a>
            </FooterStyled>
        </>
    );
};

export default Footer;
