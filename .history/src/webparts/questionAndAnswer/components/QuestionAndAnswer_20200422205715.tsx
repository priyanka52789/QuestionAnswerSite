import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import PivotMenu from "./PivotMenu";
import Dashboard from "./Dashboard";
// style={{ display: "flex" }}
const QuestionAndAnswer = () => {
  return (
    <div>
      <div>
        <PivotMenu />
      </div>
      <div>
        <Router>
          <HashRouter>
            <Dashboard />
          </HashRouter>
        </Router>
      </div>
    </div>
  );
};
export default QuestionAndAnswer;
