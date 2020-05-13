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
      {
        thumbnail:
          "https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=amartya@demonw.onmicrosoft.com&UA=0",
        title: "amartya@demonw.onmicrosoft.com",
      },
      {
        thumbnail:
          "https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=sojha@demonw.onmicrosoft.com&UA=0",
        title: "sojha@demonw.onmicrosoft.com",
      },
    ];
    setItems(tempItems);
  });

  return (
    <div className={styles.questionAndAnswer}>
      MyQuestions ...<Link to="/Question/1">Go to Question 1</Link>{" "}
      <QuestionsList items={items} />
    </div>
  );
};
export default withRouter(MyQuestions);
