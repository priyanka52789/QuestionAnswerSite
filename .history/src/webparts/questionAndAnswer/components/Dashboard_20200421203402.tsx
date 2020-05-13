import * as React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import Question from "./Question";

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AllQuestions />
      </Route>
      <Route path="/MyQuestions">
        <MyQuestions />
      </Route>
      <Route path="/Question">
        <Question />
      </Route>
    </Switch>
  );
};
export default Dashboard;
