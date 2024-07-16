import React from "react";
import { useState } from "react";
import styles from "../project/css/projectForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

const ServiceForm = ({handleSubmit, btnText, projectData}) => {
  const [service, setService] = useState({});
  
  const handleOnChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        name="name"
        text="Nome do serviço"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleOnChange}
      />
      <Input
        type="number"
        name="cost"
        text="Custo do serviço"
        placeholder="Insira o valor do serviço"
        handleOnChange={handleOnChange}
      />
      <Input
        type="text"
        name="description"
        text="Descrição do serviço"
        placeholder="Descreva o serviço"
        handleOnChange={handleOnChange}
      />
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
};

export default ServiceForm;
