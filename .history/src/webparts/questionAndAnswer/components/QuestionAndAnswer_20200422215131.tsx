import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import PivotMenu from "./PivotMenu";
import Dashboard from "./Dashboard";

const QuestionAndAnswer = (props) => {
  return (
    <div
      style={
        props.menuType == "PivotMenu"
          ? { display: "inline-block" }
          : { display: "flex" }
      }
    >
      {(props.menuType == "PivotMenu" && <PivotMenu />) || <NavMenu />}
      <Router>
        <HashRouter>
          <div>Back</div>
          <Dashboard />
        </HashRouter>
      </Router>
    </div>
  );
};
export default QuestionAndAnswer;
