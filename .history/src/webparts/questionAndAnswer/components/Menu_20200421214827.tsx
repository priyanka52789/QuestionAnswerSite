import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { Label, ILabelStyles } from "office-ui-fabric-react/lib/Label";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import { IStyleSet } from "office-ui-fabric-react/lib/Styling";
import { Link } from "react-router-dom";

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const Menu = () => {
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);

  return (
    <div>
      <Pivot aria-label="Basic Pivot Example" onLinkClick={setLastHeader}>
        <PivotItem
          headerText="AllQuestions"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "My Files Title",
          }}
        >
          <Link to="/">AllQuestions</Link>
        </PivotItem>
        <PivotItem headerText="MyQuestions">
          <Link to="/MyQuestions">MyQuestions</Link>
        </PivotItem>
        <PivotItem headerText="Question">
          <Link to="/Question/1">Question</Link>
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
          <Link to="/Question/2">Question</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
