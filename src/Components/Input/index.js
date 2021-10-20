import { Div } from "./styles";

function Input({type, name, placeholder, text, handleOnChange, value}) {

    return(
        <Div>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />     
        </Div>
    );
}

export default Input;