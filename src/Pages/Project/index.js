import { parse, v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Div, ServiceArea } from "./styles";
import Loading from "../../components/Layout/Loading";
import api from "../../server";
import FormProject from '../../components/FormProject'
import Message from '../../components/Message';
import FormService from "./FormService";
import CardService from "./CardService";

function Project(){
    
    const { id } =  useParams();
    const [Data, setData] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [services, setServices] = useState([]);

    useEffect(() => {
        getData(id);
    },[id]);

    async function getData(id){
        const response = await api.get(`/projects/${id}`);
        const data = await response.data;
        const dados = await data.projeto;
        setData(dados);
        setServices(dados.services);
    }

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    }

    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm);
    }

    const editPost = (projeto) => {
        setMessage('');
        if(projeto.budget < projeto.costs){
            setType('error');
            setMessage('O orçamento menor que o custo do projeto!');
            return false;
        }
        api.patch(`/projects/${id}`, {projeto})
        .then((res) => console.log(res.data))
        .then(() => {
            getData(id);
            setShowProjectForm(false);
            setType('success');
            setMessage('Projeto atualizado com sucesso!');
        })
        .catch((error) => console.log(error))
    }

    const createService = (projeto) => {
       const lastService = projeto.services[projeto.services.length - 1];
       lastService.id = uuidv4();
       const lastServiceCost = lastService.cost;
       const newCost = parseFloat(projeto.costs) + parseFloat(lastServiceCost);
       if(newCost > parseFloat(projeto.budget)){
           setMessage('Orçamento ultrapassado!');
           setType('error');
           projeto.services.pop();
           return false;
       }
       projeto.costs = newCost;

       api.patch(`/projects/${id}`, {projeto})
       .then((res) => res.data)
       .then(() => {
           getData(id);
           setShowServiceForm(false);
        })
       .catch((error) => console.log(error));  
    }

    const remove = (id_service, cost) => {        
        const servicesUpdate = services.filter(
            (service) => service.id !== id_service
        );
        const projeto = Data;
        projeto.services = servicesUpdate;
        projeto.costs = parseFloat(projeto.costs) - parseFloat(cost);

        api.patch(`/projects/${id}`, {projeto})
        .then(() => {
            setMessage('Serviço deletado com sucesso!');
            getData(id);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            {Data.name ?
            (<>
            {message && <Message type={type} msg={message}/>}
            <Div> 
                <h1>Projeto: {Data.name}</h1>
                
                <button onClick={toggleProjectForm}>
                    {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                </button>
                 
                {!showProjectForm ? (
                    <div className="info">
                        <p>
                            <span>Categoria:</span> {Data.category.name}
                        </p>
                        <p>
                            <span>Total de orçamento:</span> R$ {Data.budget}
                        </p>
                        <p>
                            <span>Total utilizado:</span> R$ {Data.costs}
                        </p>
                        <hr/>
                    </div>
                ) : (
                    <div className="info">              
                       <FormProject 
                       btnText='Salvar' 
                       projectData={Data}
                       handleSubmit={editPost}/>
                    <hr/>
                    </div>
                )}
            </Div>
            <Div>
                <h2>Adicione um serviço:</h2>
                <button onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                </button>
                <div className="info">   
                    {showServiceForm && 
                    <FormService
                        btnText='Adicionar Serviço'
                        handleSubmit={createService}
                        projectData={Data}
                    />}
                    <hr/>                        
                </div>
            </Div>
            <ServiceArea>
                <h2>Serviços</h2>
                <div className="services">  
                {Data.services.length > 0 && services.map((service) => (        
                        <CardService 
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.description}
                        key={service.id}
                        handleRemove={remove}
                        />   
                ))}
                </div> 
                {Data.services.length === 0 && <p>Não há serviços cadastrados!</p>}
            </ServiceArea>
            </>) : 
            <Loading/>}
        </>
    );
}

export default Project;