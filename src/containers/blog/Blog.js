import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import Routes from "../../components/routes/Routes";
import styles from "./Blog.module.css";

export default class Blog extends React.Component {
  static userId = 1;

  state = {
    users: [],
    posts: [],
    comments: [],
    currentUser: false,
  };

  render() {
    return (
      <Router>
        <Navigation />
        <Routes />
      </Router>
    );
  }
}
