import * as React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import Home from "./Home";
import Question from "./Question";

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Question/:id">
        <Question />
      </Route>
    </Switch>
  );
};
export default Dashboard;
