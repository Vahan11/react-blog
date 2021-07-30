import React from "react";
import { Home, FileText, LogIn, LogOut } from "react-feather";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={styles.navigation}>
      <div className={[styles.btn, styles.left].join(" ")}>
        <Home className={styles.icon} />
      </div>
      <div className={styles.btn}>
        <FileText className={styles.icon} />
      </div>
      <div className={[styles.btn, styles.right].join(" ")}>
        {false ? (
          <LogOut className={[styles.icon, styles.logout].join(" ")} />
        ) : (
          <Link to="/login">
            <LogIn className={[styles.icon, styles.login].join(" ")} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
