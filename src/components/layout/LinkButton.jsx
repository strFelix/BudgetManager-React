import React from "react";
import styles from "./css/LinkButton.module.css";
import { Link } from "react-router-dom";

const LinkButton = ({ to, text }) => {
  return (
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  );
};

export default LinkButton;
