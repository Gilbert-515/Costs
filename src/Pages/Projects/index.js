import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LinkButton } from "../../components";
import { Div, Title, ProjetosArea } from "./styles";
import Message from "../../components/Message";
import api from "../../server";
import Bloco from "./Blocos";
import Loading from "../../components/Layout/Loading";

function Projects() {
    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }

    const [projetos, setProjetos] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [messageDelete, setMessageDelete] = useState();

    useEffect(() => {
        api.get('/projects')
        .then((res) => res.data)
        .then((data) =>{ 
            setProjetos(data);
            setRemoveLoading(true);
        })
        .catch((error) => console.log(error));
    }, [])

    function removeProject(id){
        api.delete(`/projects/${id}`)
        .then((res) => res.data)
        .then((data) => {
            setProjetos(projetos.filter((projeto) => projeto.id !== id));
            setMessageDelete('Projeto deletado com sucesso!');
        })
        .catch((error) => console.log(error));
    }

    return (
        <Div>
            <Title>
                <h1>Projetos:</h1>
                <LinkButton text='Criar Projeto' to='/novo-projeto'/>
            </Title>
            {messageDelete && <Message msg={messageDelete} type='success'/>}
            {message && <Message msg={message} type='success'/>}
            <ProjetosArea>
            {projetos.map(({projeto, id}) => (
                <Bloco 
                id={id}
                name={projeto.name}
                budget={projeto.budget}
                category={projeto.category}
                handleRemove={removeProject}/>
            ))}
            </ProjetosArea>
            {!removeLoading && <Loading/>}
            {removeLoading && projetos.length === 0 && (
                <p>Não há projetos cadastrados!</p>
            )}
        </Div>
    );
}

export default Projects;