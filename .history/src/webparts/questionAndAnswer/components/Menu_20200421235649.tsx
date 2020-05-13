import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import { Link } from "react-router-dom";

const Menu = () => {
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);

  return (
    <div>
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
