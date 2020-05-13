import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";
import QuestionsList from "./QuestionsList";

const AllQuestions = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    let tempItems = [{}];
    setItems(tempItems);
  });

  return (
    <div className={styles.questionAndAnswer}>
      AllQuestions #### <Link to="/Question/2">Go to Question2</Link>
      <QuestionsList items={items} />
    </div>
  );
};
export default withRouter(AllQuestions);
