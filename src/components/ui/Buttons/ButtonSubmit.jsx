import React from "react";
import styles from "./ButtonSubmit.module.css";

export const ButtonSubmit = ({ onClick, text = "SUBMIT" }) => {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
