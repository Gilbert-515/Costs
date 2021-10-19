import { Link } from "react-router-dom";
import { Botao } from "./styles";

function LinkButton({ to, text}) {

    return(
        <Botao>
            <Link to={to}>{text}</Link>
        </Botao>
    );
}

export default LinkButton;