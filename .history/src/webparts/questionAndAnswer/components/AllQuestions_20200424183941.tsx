import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { QuestionsList, IQuestionItem } from "./QuestionsList";
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

const AllQuestions = (props) => {
  const [items, setItems] = React.useState<IQuestionItem[]>(undefined);
  const listName = props.getDataFromConfig(props.configData, QUESTIONSLIST);

  React.useEffect(() => {
    let tempItems: IQuestionItem[] = [
      {
        thumbnail:
          "https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=sojha@demonw.onmicrosoft.com&UA=0",
        title: "sojha@demonw.onmicrosoft.com",
      },
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
    ];
    setItems(tempItems);
    getAllQuestions().then((result) => {
      console.log("result", result);
    });
  });

  const getAllQuestions = () => {
    //updateIsLoading(true);
    let filterString = "";
    let listQueryInfo = new ListQueryInfo();
    listQueryInfo.recordCount = 4999;
    listQueryInfo.selectString = "*";
    listQueryInfo.filterString = encodeURIComponent(filterString);
    listQueryInfo.expandString = "";
    listQueryInfo.orderByColumnName = "Id";
    listQueryInfo.orderByIsAscending = false;
    //console.log(" filterString: ", filterString);
    return props.dataProvider.getItemsFromList(listName, listQueryInfo);
  };

  return (
    <div className={styles.questionAndAnswer}>
      <QuestionsList items={items} {...props} />
    </div>
  );
};
export default withRouter(AllQuestions);
