import * as React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import Question from "./Question";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import AddQuestion from "./AddQuestion";

const Dashboard = (props) => {
  return (
    <Switch>
      <Route exact path="/AllQuestions">
        <AllQuestions {...props} />
      </Route>
      <Route exact path="/MyQuestions">
        <MyQuestions {...props} />
      </Route>
      <Route exact path="/AddQuestion">
        <AddQuestion {...props} />
      </Route>
      <Route path="/Question/:id">
        <Question {...props} />
      </Route>
      <Route exact path="/">
        <AllQuestions {...props} />
      </Route>
    </Switch>
  );
};
export default Dashboard;
