import { useLocation } from "react-router-dom";
import React from "react";
import styles from "./css/projects.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

const Projects = () => {
  const location = useLocation();
  let message = location.state ? location.state.message : "";
  let type = location.state ? location.state.type : "";

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
      </div>
      <Message type={type} msg={message} />
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
};

export default Projects;
