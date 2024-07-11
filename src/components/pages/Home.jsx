import React from "react";
import styles from "./css/home.module.css";
import savings from "../../assets/img/savings.svg";
import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Budget Manager</span>
      </h1>
      <p>Comece a ferenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
      <img src={savings} alt="" />
    </section>
  );
};

export default Home;
