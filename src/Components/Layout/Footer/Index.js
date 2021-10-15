import style from './../../../css/Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer () {

    return(
        <footer className={style.rodape}>
            <ul className={style.ul}>
                <li className={style.redes}><FaFacebook/></li>
                <li className={style.redes}><FaInstagram/></li>
                <li className={style.redes}><FaTwitter/></li>
                <li className={style.redes}><FaLinkedin/></li>
            </ul>
            <div className={style.copyRight}>
                <p><span>costs</span> &copy; 2021</p>
            </div>
        </footer>
    );
}

export default Footer;