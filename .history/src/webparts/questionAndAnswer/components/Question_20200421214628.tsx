import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { useParams } from "react-router-dom";

const Question = () => {
  let { id } = useParams();
  return <div className={styles.questionAndAnswer}>Question : {id}</div>;
};
export default withRouter(Question);
