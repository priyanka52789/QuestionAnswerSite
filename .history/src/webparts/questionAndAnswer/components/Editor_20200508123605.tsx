import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as PropTypes from "prop-types";

export default class Editor extends React.Component<any, any> {
  public static formats: string[];
  public static propTypes: { placeholder: any };
  public static modules: {
    //table: Boolean;
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
    this.state = { editorHtml: "", theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(html) {
    this.setState({ editorHtml: html });
  }

  public handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }

  public render() {
    return (
      <div style={{ padding: "10px 0px" }}>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          //modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
        {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div> */}
      </div>
    );
  }
}

Editor.modules = {
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
