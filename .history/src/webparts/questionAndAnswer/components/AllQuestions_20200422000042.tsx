import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";
const AllQuestions = () => {
  return (
    <div className={styles.questionAndAnswer}>
      AllQuestions #### <Link to="/Question/2">Go to Question2</Link>
    </div>
  );
};
export default withRouter(AllQuestions);
