import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import PivotMenu from "./PivotMenu";
import Dashboard from "./Dashboard";
// style={{ display: "flex" }}
const QuestionAndAnswer = (props) => {
  return (
    <div>
      <PivotMenu />
      <Router>
        <HashRouter>
          <Dashboard />
        </HashRouter>
      </Router>
    </div>
  );
};
export default QuestionAndAnswer;
