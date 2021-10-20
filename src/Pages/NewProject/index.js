import { Div } from "./styles";
import { FormProject } from "../../components";

 function NewProject () {

    return (
       <Div>
          <h1>Criar Projeto</h1>
          <p>Crie seu projeto depois adicione os serviços</p>
          <FormProject btnText='Criar Projeto'/>
       </Div>
    );
 }

 export default NewProject;