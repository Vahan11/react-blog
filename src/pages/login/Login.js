import React, { useState } from "react";
import { USER, PASS } from "./constants";
import styles from "./Login.module.css";

const Login = (props) => {
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const inputsHandler = (e, type) => {
    switch (type) {
      case USER:
        setUserInput(e.target.value);
        break;
      case PASS:
        setPassInput(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.login}>
      <p className={styles.txt}>Please LogIn</p>
      <input onChange={(e) => inputsHandler(e, USER)} placeholder="Username" />
      <input onChange={(e) => inputsHandler(e, PASS)} placeholder="Password" />
      <p className={[styles.txt, styles.loginBtn].join(" ")}>LogIn</p>
    </div>
  );
};

export default Login;
