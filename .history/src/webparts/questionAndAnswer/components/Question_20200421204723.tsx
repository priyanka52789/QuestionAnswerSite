import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";

const Question = () => {
  return <div className={styles.questionAndAnswer}>Question !!!!</div>;
};
export default withRouter(Question);
