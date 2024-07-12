import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./css/projects.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  let message = location.state ? location.state.message : "";
  let type = location.state ? location.state.type : "";

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
      </div>
      <Message type={type} msg={message} />
      <Container customClass="start">
        {projects.length > 0 && (
          projects.map((project) => 
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
            />
          ))}
      </Container>
    </div>
  );
};

export default Projects;
