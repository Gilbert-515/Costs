import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import TextArea from "../TextArea";
import { Form } from "./styles";
import api from './../../server'

  function FormProject({btnText, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([]);
    const [projeto, setProjeto] = useState(projectData || {});

    useEffect(() => {
        api.get('/categories')
        .then((res) => res.data)
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err));
    }, []);

   
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(projeto);
    }

    function handleChange(e){
        setProjeto({...projeto, [e.target.name]: e.target.value});
    }

    function handleCategory(e){
        setProjeto({...projeto, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }});
    }
    
    return(
        <Form onSubmit={submit}>
            <div>
                <Input 
                name='name'
                text='Nome do Projeto'
                type='text'
                placeholder='Insira o nome do projeto'
                handleOnChange={handleChange}
                required={true}
                value={projeto.name ? projeto.name : ''}/>
            </div>
            <div>
               <Input
               text='Orçamento do Projeto'
               name='budget'
               type='number'
               step='any'
               placeholder='Insira o orçamento total'
               handleOnChange={handleChange}
               required={true}
               value={projeto.budget ? projeto.budget : ''}/>
            </div>
            <div>
                <Select 
                text='Selecione a Categoria'
                name='category_id'
                options={categories}
                handleOnChange={handleCategory}
                required={true}
                value={projeto.category ? projeto.category.id : ''}/>
            </div>
            <div>
                <TextArea
                name='description'
                text='Descrição do Projeto'
                placeholder='Insira a descrição do projeto'
                rows='5'
                handleOnChange={handleChange}
                required={true}
                value={projeto.description ? projeto.description : ''}/>
            </div>
            <div>
                <Button text={btnText}/>
            </div>
        </Form>
    );
}

export default FormProject;