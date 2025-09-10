import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, name, value, onChange, error, onBlur, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
