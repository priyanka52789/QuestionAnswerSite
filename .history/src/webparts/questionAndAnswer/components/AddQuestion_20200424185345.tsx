import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { TextField } from "office-ui-fabric-react";
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

const AddQuestion = (props) => {
  return (
    <div>
      <h2>Add Question</h2>
      <TextField label="Question:" />
      <TextField label="Description:" multiline={true} rows={6} />
    </div>
  );
};
export default withRouter(AddQuestion);
