import LinkButton from '../../components/LinkButton';
import saving from './../../assets/savings.svg'
import { Sessao } from './styles'

function Home () {

    return (
        <Sessao>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/novo-projeto' text='Criar Projeto'/>
            <img src={saving} alt='saving'/>
        </Sessao>
    );
}

export default Home;