import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Menu from "./Menu";
import Dashboard from "./Dashboard";

const QuestionAndAnswer = () => {
  
  return (
    <div style={{ display: "flex" }}>
          <div>
            <Menu />
          </div>
          <div>
            <Router>
      <HashRouter></HashRouter>
            <Dashboard />
            </HashRouter>
    </Router>
          </div>
        </div>
    
        
      
  );
};
export default QuestionAndAnswer;
