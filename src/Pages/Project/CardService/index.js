import { BlocoService } from './styled'
import { FaTrashAlt } from 'react-icons/fa';

function CardService({id, name, cost, description, handleRemove}){

    function remove(e){
        handleRemove(id, cost);
    }

    return(
        <BlocoService>
            <span className='title'>{name}</span>
            <p><span className="forte">Orçamento:</span> R$ {cost}</p>
            <p>{description}</p>
            <div>
             <button onClick={remove}><FaTrashAlt/> Excluir</button>
            </div>
        </BlocoService>
    );
}

export default CardService;