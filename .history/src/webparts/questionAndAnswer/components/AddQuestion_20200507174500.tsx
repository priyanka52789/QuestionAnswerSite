import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
import * as ReactQuill from "react-quill";
import {
  TextField,
  PrimaryButton,
  DefaultButton,
} from "office-ui-fabric-react";
import { replaceAll } from "../../../common/Utils";
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
  const [fileInfos, setFileInfos] = React.useState([]);
  const [text, setText] = React.useState("");

  function handleChange(value) {
    setText(value);
  }

  function selectFile(evt) {
    let fileControl: any = evt.currentTarget;
    let fileReader: FileReader;
    let filesArr: any[] = [];
    const handleFileRead = (e) => {
      const content = fileReader.result;
      let fileName = encodeURIComponent(file.name);
      fileName = replaceAll(fileName, "'", "%27");
      fileName = replaceAll(fileName, "/(/g", "%28");
      fileName = replaceAll(fileName, "/)/g", "%29");
      fileName = replaceAll(fileName, "/*/g", "%2A");
      fileName = replaceAll(fileName, "/%20/g", "+");
      filesArr.push({
        name: fileName,
        content: e.target.result,
      });
      console.log(content);
      setTimeout(() => {
        setFileInfos([...filesArr]);
      }, 100);
    };

    if (fileControl && fileControl.files.length > 0 && fileControl.files[0]) {
      var file: File = fileControl.files[0];
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      //fileReader.readAsText(file1);
      fileReader.readAsArrayBuffer(file);
    }
  }

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
      <div className={styles.panelUpload}>
        <input
          type="file"
          className={styles.btnUpload}
          id="myFile"
          onChange={(evt) => selectFile(evt)}
        ></input>
        <DefaultButton
          className={styles.btnSubmit}
          data-automation-id="CreateCase"
          text="Upload"
          onClick={() => alert(fileInfos[0].content)}
        />
      </div>
      <PrimaryButton
        onClick={() => {
          //alert(titleText + " : " + descriptionText);
          try {
            props.dataProvider
              .createSite(
                "TestSite",
                "TestSite",
                "This is a Blog Site",
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
