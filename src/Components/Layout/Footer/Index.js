import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Rodape, Ul, Li, Copy } from './styles'

function Footer () {

    return(
        <Rodape >
            <Ul >
                <Li ><FaFacebook/></Li>
                <Li ><FaInstagram/></Li>
                <Li ><FaTwitter/></Li>
                <Li ><FaLinkedin/></Li>
            </Ul>
            <Copy>
                <p><span>costs</span> &copy; 2021</p>
            </Copy>
        </Rodape>
    );
}

export default Footer;