import * as React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import Home from "./Home";
import Question from "./Question";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/AllQuestions">
        <AllQuestions />
      </Route>
      <Route exact path="/MyQuestions">
        <MyQuestions />
      </Route>
      <Route path="/Question/:id">
        <Question />
      </Route>
      <Route exact path="/">
        <AllQuestions />
      </Route>
    </Switch>
  );
};
export default Dashboard;
