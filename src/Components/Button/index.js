import { Div } from "./styles";

function Button({text, type}){

    return(
        <Div>
            <button type={type}>{text}</button>
        </Div>
    );
}

export default Button;