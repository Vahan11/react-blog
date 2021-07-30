import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Posts from "../../pages/posts/Posts";
import Login from "../../pages/login/Login";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/posts" children={<Posts />} />
      <Route path="/login" children={<Login />} />
    </Switch>
  );
};

export default Routes;
