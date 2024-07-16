import React from "react";
import styles from "./css/project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { parse, v4 as uuidv4 } from "uuid";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.error(err));
    }, 200);
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const createService = (project) => {
    setMessage("");
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();
    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("O orçamento não pode ser excedido.");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        setShowServiceForm(false);
        console.log(services);
      })
      .catch((err) => console.error(err));
  };

  const removeService = (id, cost) => {
    const servicesUpdated = project.services.filter((service) => service.id !== id); 
    const projectUpdated = project;
    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(project.cost) - parseFloat(cost);
    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage('Serviço removido.');
        setType('success');
      })
      .catch((err) => console.error(err));
  };

  const editPost = (project) => {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage(`${project.name} foi atualizado.`);
        setType("success");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {project.name ? (
        <div className={styles.projectDetails}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.detailsContainer}>
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.projectInfo}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Utilzado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projectInfo}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  ></ProjectForm>
                </div>
              )}
            </div>
            <div className={styles.serviceFormContainer}>
              <h2>Adicione serviços:</h2>
              <button onClick={toggleServiceForm} className={styles.btn}>
                {!showServiceForm ? "Adicionar serviços" : "Fechar"}
              </button>
              <div className={styles.projectInfo}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText={"Adicionar Serviço"}
                    projectData={project}
                  ></ServiceForm>
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost} 
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços registrados ao projeto.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Project;
