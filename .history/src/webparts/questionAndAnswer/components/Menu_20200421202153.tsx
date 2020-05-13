import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
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
  );
};
export default Menu;
