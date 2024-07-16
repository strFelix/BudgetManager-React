import React from "react";
import styles from "../project/css/projectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };
  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> {cost}
      </p>
      <p>{description}</p>
      <div className={styles.projectCardActions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Remover
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
