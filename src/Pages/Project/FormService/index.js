import {Form} from './../../../components/FormProject/styles'
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';

function FormService({handleSubmit, btnText, projectData}){

    const [service, setService] = useState();

    const submit = (e) => {
        e.preventDefault();    
        projectData.services.push(service);
        handleSubmit(projectData);
    }
    const handleChange = (e) => {
        setService({...service, [e.target.name]: e.target.value});
    }

    return(
        <Form onSubmit={submit}>
            <Input
            type='text'
            text='Nome do serviço'
            name='name'
            placeholder='insira o nome do serviço'
            handleOnChange={handleChange}
            required={true}
            />
             <Input
            type='number'
            text='Custo do serviço'
            name='cost'
            placeholder='insira o valor total'
            handleOnChange={handleChange}
            required={true}
            />
             <Input
            type='text'
            text='Descrição do serviço'
            name='description'
            placeholder='descreva do serviço'
            handleOnChange={handleChange}
            required={true}
            />
            <Button text={btnText} type='submit'/>
        </Form>      
    );
}

export default FormService;