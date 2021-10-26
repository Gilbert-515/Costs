import loading from '../../../assets/loading.svg'
import { Div, Img } from './styles'

function Loading(){

    return(
        <Div>
            <Img src={loading} alt='loading'/>
        </Div>
    );
}

export default Loading;