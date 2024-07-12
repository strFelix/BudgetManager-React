import React from "react";
import { useState, useEffect } from "react";
import styles from "./css/Message.module.css";

const Message = ({ type, msg }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) setVisible(false);
    else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => {
        clearTimeout();
      };
    }
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
};

export default Message;
