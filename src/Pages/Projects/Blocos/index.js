import { BlocoProj } from "./styles";
import { FaPencilAlt, FaTrashAlt, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Bloco({name, budget, category, id, handleRemove}){

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return(
        <BlocoProj key={id}>
            <span className="title">{name}</span>
            <p><span className="forte">Orçamento:</span> R$ {budget}</p>
            <p><span className={`category-${category.id}`}><FaCircle/></span> {category.name}</p>
            <div>
                <Link to={`projeto/${id}`}><button ><FaPencilAlt/> Editar</button></Link>
                <button onClick={remove}><FaTrashAlt/> Excluir</button>
            </div>
        </BlocoProj>    
        
    );
}

export default Bloco;