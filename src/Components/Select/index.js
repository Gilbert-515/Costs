import { Div } from "./styles";

function Select({ name, text, handleOnChange, value}) {

    return(
        <Div>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>   
        </Div>
    );
}

export default Select;