import * as React from "react";
import { withRouter } from "react-router-dom";
import styles from "./QuestionAndAnswer.module.scss";
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

  function selectFile(evt) {
    let fileControl: any = evt.currentTarget;
    let fileReader: FileReader;
    let filesArr: any[];
    const handleFileRead = (e) => {
      const content = fileReader.result;
      let fileName = encodeURIComponent(file.name);
      fileName = replaceAll(fileName, "'", "%27");
      fileName = replaceAll(fileName, "/(/g", "%28");
      fileName = replaceAll(fileName, "/)/g", "%29");
      fileName = replaceAll(fileName, "/*/g", "%2A");
      fileName = replaceAll(fileName, "/%20/g", "+");
      //Push the converted file into array
      filesArr.push({
        name: fileName,
        content: e.target.result,
      });
      console.log(content);
      // … do something with the 'content' …
    };

    const handleFileChosen = (file1: File) => {
      //debugger;
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      //fileReader.readAsText(file1);
      fileReader.readAsArrayBuffer(file1);
    };

    if (fileControl && fileControl.files.length > 0 && fileControl.files[0]) {
      let fileName: string = fileControl.files[0].name;

      let lastDotIndex: number = fileName.lastIndexOf(".");
      var file = fileControl.files[0];
      handleFileChosen(file);

      setTimeout(() => {
        setFileInfos([...filesArr]);
      }, 100);
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
          data-automation-id="Upload"
          text="Upload"
          onClick={() => alert("hello world")}
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
