import React from "react";
import loading from "../../assets/img/loading.svg";
import styles from "./css/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src={loading} alt="loading" className={styles.loading} />
    </div>
  );
};

export default Loading;
