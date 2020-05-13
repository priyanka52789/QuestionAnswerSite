import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";

const AddQuestion = (props) => {
  return <div className={styles.questionAndAnswer}>Add Question </div>;
};
export default withRouter(AddQuestion);
