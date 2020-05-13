import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { Label, ILabelStyles } from "office-ui-fabric-react/lib/Label";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { IStyleSet } from "office-ui-fabric-react/lib/Styling";
import { Link } from "react-router-dom";

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const Menu = () => {
  return (
    <div>
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem
          headerText="My Files"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "My Files Title",
          }}
        >
          <Label styles={labelStyles}>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText="Recent">
          <Label styles={labelStyles}>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Shared with me">
          <Label styles={labelStyles}>Pivot #3</Label>
        </PivotItem>
      </Pivot>
      <ul>
        <li>
          <Link to="/">AllQuestions</Link>
        </li>
        <li>
          <Link to="/MyQuestions">MyQuestions</Link>
        </li>
        <li>
          <Link to="/Question">Question</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
