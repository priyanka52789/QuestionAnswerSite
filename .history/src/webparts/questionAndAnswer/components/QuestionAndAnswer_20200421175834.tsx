import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import Question from "./Question";

const QuestionAndAnswer = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">AllQuestions</Link>
          </li>
          <li>
            <Link to="/MyQuestions">MyQuestions</Link>
          </li>
          <li>
            <Link to="/Question">Question</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
      </div>
    </Router>
  );
};
export default QuestionAndAnswer;
