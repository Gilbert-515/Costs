import { Link } from 'react-router-dom';
import style from './../../../css/Menu.module.css';
import image from './../../../img/costs_logo.png';

function Menu () {

    return(
        <header className={style.header}>       
            <ul className={style.ul}>
                <img src={image} alt='logo' className={style.logo}/>
                <Link to='/' className={style.link}><li >Home</li></Link>
                <Link to='/projetos' className={style.link}><li >Projetos</li></Link>
                <Link className={style.link}><li >About</li></Link>
                <Link className={style.link}><li >About</li></Link>
            </ul>
        </header>
    );
}

export default Menu;