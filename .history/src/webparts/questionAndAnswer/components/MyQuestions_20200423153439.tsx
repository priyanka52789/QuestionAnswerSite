import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { QuestionsList, IQuestionItem } from "./QuestionsList";
import { Link } from "react-router-dom";

const MyQuestions = () => {
  const [items, setItems] = React.useState<IQuestionItem[]>(undefined);
  React.useEffect(() => {
    let tempItems: IQuestionItem[] = [
      {
        thumbnail:
          "https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=priyanka@demonw.onmicrosoft.com&UA=0",
        title: "priyanka@demonw.onmicrosoft.com",
      },
    ];
    setItems(tempItems);
  });

  return (
    <div className={styles.questionAndAnswer}>
      <Link to="/AddQuestion">Add Question</Link>
      <QuestionsList items={items} {...props} />
    </div>
  );
};
export default withRouter(MyQuestions);
