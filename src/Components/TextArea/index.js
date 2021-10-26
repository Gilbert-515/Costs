import { AreaTexto, Label } from "./styles";

function TextArea({text, name, handleOnChange, rows, placeholder, value, required}){

    return(
        <div>
            <Label>{text}</Label>
            <AreaTexto
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={handleOnChange}
            rows={rows}
            value={value}
            required={required}>
           </AreaTexto>
        </div>
    );
}

export default TextArea;