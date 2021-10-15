import { Link } from 'react-router-dom';
import './Index.css'
import image from './../../Img/costs_logo.png'

function Menu () {

    return(
        <header>       
            <ul>
                <img src={image} alt='logo'/>
                <Link to='/'><li>Home</li></Link>
                <Link to='/projetos'><li>Projetos</li></Link>
                <Link><li>About</li></Link>
                <Link><li>About</li></Link>
            </ul>
        </header>
    );
}

export default Menu;