import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import Question from "./Question";

const QuestionAndAnswer = () => {
  return (
    <Router>
      <HashRouter>
        <Menu />
        <hr />
        <Dashboard />
      </HashRouter>
    </Router>
  );
};
export default QuestionAndAnswer;
