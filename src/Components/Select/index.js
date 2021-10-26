import { Div } from "./styles";

function Select({ name, text, handleOnChange, value, options, required}) {

    return(
        <Div>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''} required={required}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>   
        </Div>
    );
}

export default Select;