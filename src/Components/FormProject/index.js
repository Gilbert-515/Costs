import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { Form } from "./styles";

function FormProject({btnText}) {

    return(
        <Form>
            <div>
                <Input 
                name='name_project'
                text='Nome do Projeto'
                placeholder='Insira o nome do projeto'/>
            </div>
            <div>
               <Input
               text='Orçamento do Projeto'
               name='budget'
               placeholder='Insira o orçamento total'/>
            </div>
            <div>
                <Select 
                text='Selecione a Categoria'
                name='category_id'/>
            </div>
            <div>
                <Button text={btnText}/>
            </div>
        </Form>
    );
}

export default FormProject;