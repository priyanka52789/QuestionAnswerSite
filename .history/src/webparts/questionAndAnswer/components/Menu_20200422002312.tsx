import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import { Link } from "react-router-dom";
import { Nav, INavLink, INavStyles } from "office-ui-fabric-react/lib/Nav";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const Menu = () => {
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);

  return (
    <div>
      <Nav
        //onLinkClick={_onLinkClick}
        selectedKey="key1"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={[
          {
            links: [
              {
                name: "AllQuestions",
                url: "https://localhost:4321/temp/workbench.html#/AllQuestions",
                key: "key1",
              },
              {
                name: "MyQuestions",
                url: "https://localhost:4321/temp/workbench.html#/MyQuestions",
                key: "key2",
              },
            ],
          },
        ]}
      />
      {/* <ul>
        <li>
          <Link to="/">AllQuestions</Link>
        </li>
        <li>
          <Link to="/MyQuestions">MyQuestions</Link>
        </li>
        <li>
          <Link to="/Question/2">Question</Link>
        </li>
      </ul> */}
    </div>
  );
};
export default Menu;
