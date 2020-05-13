import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";
import QuestionsList from "./QuestionsList";

const AllQuestions = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    let tempItems = [
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
      AllQuestions #### <Link to="/Question/2">Go to Question2</Link>
      <QuestionsList items={items} />
    </div>
  );
};
export default withRouter(AllQuestions);
