import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Dashboard from "./Dashboard";

const QuestionAndAnswer = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Home />
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
