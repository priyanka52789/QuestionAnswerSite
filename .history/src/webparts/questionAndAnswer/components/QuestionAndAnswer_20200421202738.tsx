import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Menu from "./Menu";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import Question from "./Question";

const QuestionAndAnswer = () => {
  return (
    <Router>
      <div>
        <HashRouter>
          <Menu />
        </HashRouter>
        <hr />
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
