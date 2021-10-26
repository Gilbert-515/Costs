import { Div } from "./styles";

function Input({type, name, placeholder, text, handleOnChange, value , required, step}) {

    return(
        <Div>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name}
            step={step}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            required={required}
            autoComplete="off"
            />     
        </Div>
    );
}

export default Input;