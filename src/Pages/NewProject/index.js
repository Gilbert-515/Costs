import { Div } from "./styles";
import { FormProject } from "../../components";
import { useHistory } from "react-router";
import api from "../../server";

 function NewProject () {

   const history = useHistory();

   function createPost(projeto){
      projeto.costs = 0;
      projeto.services = []

      api.post('/projects', {projeto})
      .then((res) => res.data)
      .then((data) => history.push('/projetos', { message: 'Projeto criado com sucesso!' }))
      .catch((err) => console.log(err));
   };

    return (
       <Div>
          <h1>Criar Projeto</h1>
          <p>Crie seu projeto depois adicione os serviços</p>
          <FormProject handleSubmit={createPost} btnText='Criar Projeto'/>
       </Div>
    );
 }

 export default NewProject;