import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { QuestionsList, IQuestionItem } from "./QuestionsList";
import { Link } from "react-router-dom";
import {
  PRIMARYDESCRIPTIONCOL,
  PRIMARYIMAGECOL,
  ADDITIONALDESCRIPTIONCOL,
  ADDITIONALIMAGECOL,
  USERCOL,
  USERIMAGECOL,
  QUESTIONIDCOL,
  ANSWERIDCOL,
  ISCORRECTCOL,
  RATINGCOL,
  LIKECOL,
  QUESTIONSLIST,
  ANSWERSLIST,
  RATINGSLIST,
  LIKESLIST,
  IMAGELIB,
} from "../../../common/Constants";
import { ListQueryInfo } from "../../../common/models/ListQueryInfo";

const MyQuestions = (props) => {
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

  const getMyQuestions = (listName) => {
    //updateIsLoading(true);
    //let filterString = "";
    let listQueryInfo = new ListQueryInfo();
    listQueryInfo.recordCount = 4999;
    listQueryInfo.selectString = "*";
    //listQueryInfo.filterString = encodeURIComponent(filterString);
    //listQueryInfo.expandString = "";
    //listQueryInfo.orderByColumnName = "Id";
    //listQueryInfo.orderByIsAscending = false;
    //console.log(" filterString: ", filterString);
    return props.dataProvider.getItemsFromList(listName, listQueryInfo);
  };

  return (
    <div className={styles.questionAndAnswer}>
      <Link to="/AddQuestion">Add Question</Link>
      <QuestionsList items={items} {...props} />
    </div>
  );
};
export default withRouter(MyQuestions);
