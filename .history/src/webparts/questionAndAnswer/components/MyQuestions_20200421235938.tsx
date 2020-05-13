import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";

const MyQuestions = () => {
  return (
    <div className={styles.questionAndAnswer}>
      MyQuestions ...<Link to="/Question/1">Go to Question 1</Link>{" "}
    </div>
  );
};
export default withRouter(MyQuestions);
