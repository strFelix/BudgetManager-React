
import { useState, useEffect } from "react";
import styles from "./css/projectForm.module.css";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import SubmitButton from "../form/SubmitButton.jsx";

const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total do projeto"
      />
      <Select name="category_id" text="Selecione a categoria" options={categories}/>
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
