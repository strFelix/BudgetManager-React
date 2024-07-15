import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./css/projects.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState({ type: "", msg: "" });
  const location = useLocation();
  let message = location.state?.message || "";
  let type = location.state?.type || "";

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
    }, 1500); 
  }, []);

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then(() => {
      const newProjects = projects.filter((project) => project.id !== id);
      setProjects(newProjects);
      setProjectMessage({ type: 'alert', msg: 'Projeto removido com sucesso.' });
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
      </div>
      {message && <Message type={type} msg={message} />}
      {projectMessage && <Message type={projectMessage.type} msg={projectMessage.msg}/>}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {projects.length === 0 && removeLoading && (
          <Message type="error" msg="Nenhum projeto encontrado." />
        )}
      </Container>
    </div>
  );
};

export default Projects;
