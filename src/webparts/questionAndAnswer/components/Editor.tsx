import * as React from "react";
import ReactQuill, { Quill } from "react-quill-2";
import QuillBetterTable from "quill-better-table";
import "react-quill-2/dist/quill.snow.css";
import "./quill.table.scss";
import * as PropTypes from "prop-types";
import styles from "./QuestionAndAnswer.module.scss";
import { Icon } from "office-ui-fabric-react/lib/Icon";

// var Block = Quill.import("blots/block");
// Block.tagName = "DIV";
// Quill.register(Block, true);

Quill.register(
  {
    "modules/better-table": QuillBetterTable,
  },
  true
);

let self: any = null;

// var Parchment = Quill.import('parchment');
// var TokenClass = new Parchment.Attributor.Class('token', 'token', {
//   scope: Parchment.Scope.INLINE
// });
// Quill.register(TokenClass, true);

// var Token = Quill.import('formats/image');
// Token.className = 'token';
// Token.blotName = 'img-token';
// Quill.register(Token);

const CustomButtonSrcCode = () => (
  <span className={styles.fontSize}>
    <Icon iconName={"Code"} />
  </span>
);

function table() {
  //debugger;
  let tableModule = this.quill.getModule("better-table");
  tableModule.insertTable(3, 3);
}

function link(value) {
  if (value) {
    var href = prompt("Enter the URL");
    this.quill.format("link", href);
  } else {
    this.quill.format("link", false);
  }
}

function insertSourceCode() {
  self.props.context.propertyPane.open();
}

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-header" value="1" />
    <button className="ql-header" value="2" />
    <select className="ql-font"></select>
    <select className="ql-size"></select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline" />
    <button className="ql-strike" />
    <select className="ql-color"></select>
    <select className="ql-background"></select>
    <button className="ql-blockquote" />
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />
    <select className="ql-align ql-picker ql-icon-picker"></select>
    <button className="ql-link" />
    <button className="ql-image" />
    <button className="ql-script" value="sub" />
    <button className="ql-script" value="super" />
    <button className="ql-code-block" value="super" />
    <button className="ql-indent" value="-1" />
    <button className="ql-indent" value="+1" />
    <button className="ql-direction" value="rtl" />
    <button className="ql-video" />
    <button className="ql-formula" />
    <button className="ql-clean" />
    <button className="ql-table" />
    <button className="ql-insertSourceCode">
      <CustomButtonSrcCode />
    </button>
  </div>
);

export default class Editor extends React.Component<any, any> {
  public static formats: string[];
  public static propTypes: { placeholder: any };
  public static modules: {
    //table: Boolean;
    //markdownShortcuts: any;
    // htmlEditButton: any;
    //'better-table':any;
    //tableUI: Boolean;
    "better-table": {
      operationMenu: {
        items: {
          unmergeCells: {
            text: string;
          };
        };
      };
    };
    keyboard: {
      bindings: QuillBetterTable.keyboardBindings;
    };
    toolbar: {
      container: string;
      handlers: {
        table: (val) => void;
        link: (val) => void;
        insertSourceCode: () => void;
      };
    };
    //toolbar: any;
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
    console.log("source: ", source, " content: ", content);
    //if (source === "user") {
    this.setState({ editorHtml: content });
    this.props.updateParentHtml(content);
    // }
  }

  public render() {
    self = this;

    return (
      <div className={styles.editorContainer}>
        <CustomToolbar />
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
  //table: false,
  "better-table": {
    operationMenu: {
      items: {
        unmergeCells: {
          text: "Another unmerge cells name",
        },
      },
    },
  },
  keyboard: {
    bindings: QuillBetterTable.keyboardBindings,
  },
  toolbar: {
    container: "#toolbar",
    handlers: {
      table: table,
      link: link,
      insertSourceCode: insertSourceCode,
    },
  },
  //toolbar: toolbarOptions,
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
  "script",
  "align",
  "direction",
  "code-block",
  "code",
  "color",
  "background",
  "formula",
];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
};
