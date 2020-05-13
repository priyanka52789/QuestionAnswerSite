import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
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
  const [titleText, setTitleText] = React.useState("");
  const [descriptionText, setDescriptionText] = React.useState("");

  return (
    <div>
      <h2>Add Question</h2>
      <TextField
        label="Question:"
        value={titleText}
        onChange={(evt, val) => setTitleText(val)}
      />
      <TextField
        label="Description:"
        multiline={true}
        rows={6}
        value={descriptionText}
        onChange={(evt, val) => setDescriptionText(val)}
      />
      <PrimaryButton
        onClick={() => {
          //alert(titleText + " : " + descriptionText);
          try {
            props.dataProvider
              .createSite(
                "New Sub Site",
                "newsite",
                "Description for the new Site",
                "Blog",
                1033,
                true
              )
              .then((result) => {
                if (result.data.Created) {
                  alert("Site created successfully");
                }
              });
          } catch (e) {
            alert("Site creation failed" + e);
          }
        }}
      >
        Save
      </PrimaryButton>
    </div>
  );
};
export default withRouter(AddQuestion);
