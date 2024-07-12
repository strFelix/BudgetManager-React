import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/newProject.module.css";
import ProjectForm from "../project/ProjectForm";

const NewProject = () => {
  const navigate = useNavigate();
  function CreatePost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      // redirect
      .then(() => {
        const state = { message: "Projeto criado com sucesso!", type:"success"};
        navigate("/projects", {state});
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className={styles.newPeojectContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços!</p>
      <ProjectForm
        handleSubmit={CreatePost}
        btnText="Criar projeto"
      ></ProjectForm>
    </div>
  );
};

export default NewProject;
