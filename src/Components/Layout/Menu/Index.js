import { Link } from 'react-router-dom';
import image from './../../../assets/costs_logo.png';
import { Header, Ul, Img, Lk } from './styles'

function Menu () {

    return(
        <Header >       
            <Ul >
                <Img src={image} alt='logo'/>
                <Lk><Link to='/'><li >Home</li></Link></Lk>    
                <Lk><Link to='/projetos'><li >Projetos</li></Link></Lk>
                <Lk><Link ><li >About</li></Link></Lk>   
                <Lk><Link ><li >About</li></Link></Lk>
            </Ul>
        </Header>
    );
}

export default Menu;