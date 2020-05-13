import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as PropTypes from "prop-types";
import styles from "./QuestionAndAnswer.module.scss";

export default class Editor extends React.Component<any, any> {
  public static formats: string[];
  public static propTypes: { placeholder: any };
  public static modules: {
    table: Boolean;
    //markdownShortcuts: any;
    // htmlEditButton: any;
    //'better-table':any;
    //tableUI: Boolean;
    //    "better-table": {
    //      operationMenu: {
    //        items: {
    //          unmergeCells: {
    //            text: string;
    //          };
    //        };
    //      };
    //    };
    //    keyboard: {
    //      bindings: QuillBetterTable.keyboardBindings;
    //    };
    toolbar: (
      | string[]
      | ({ header: string } | { font: undefined[] })[]
      | { size: undefined[] }[]
      | ({ list: string } | { indent: string })[]
    )[];
    clipboard: {
      matchVisual: boolean;
      //matchers: any[];
      // onCapturePaste: (val) => void;
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: props.initialValue,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public componentWillMount() {
    console.log("componentWillMount");
  }

  public componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps", props.initialValue);
    this.setState({ editorHtml: props.initialValue });
  }

  public handleChange(content, delta, source, editor) {
    console.log("source: ", source);
    console.log("content: ", content);
    console.log("getHTML: ", editor.getHTML());
    console.log("getContents: ", editor.getContents());
    console.log("getText: ", editor.getText());
    if (source === "user") {
      this.setState({ editorHtml: content });
      this.props.updateParentHtml(content);
    } else {
      editor.setContent(this.state.editorHtml);
    }
  }

  public render() {
    return (
      <div className={styles.editorContainer}>
        <ReactQuill
          className={styles.editor}
          theme={"snow"}
          onChange={this.handleChange}
          //defaultValue={this.state.editorHtml}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

Editor.modules = {
  table: false,
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
};
