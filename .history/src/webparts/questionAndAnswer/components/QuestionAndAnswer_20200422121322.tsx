import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Menu from "./Menu";
import Dashboard from "./Dashboard";

const QuestionAndAnswer = () => {
  return (
    <Router>
      <HashRouter>
        <div style={{ background: "yellow" }}>
          <div style={{ background: "cyan" }}>
            <Menu />
          </div>
          <div style={{ background: "blue" }}>
            <Dashboard />
          </div>
        </div>
      </HashRouter>
    </Router>
  );
};
export default QuestionAndAnswer;
