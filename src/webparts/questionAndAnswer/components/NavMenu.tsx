import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { Link } from "react-router-dom";
import { Nav, INavLink, INavStyles } from "office-ui-fabric-react";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const NavMenu = () => {
  const [selectedKey, setSelectedKey] = React.useState("key1");

  function _onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item) {
      setSelectedKey(item.key);
    }
  }
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey={selectedKey}
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={[
        {
          links: [
            {
              name: "All Questions",
              url: "#/AllQuestions",
              key: "key1",
            },
            {
              name: "My Questions",
              url: "#/MyQuestions",
              key: "key2",
            },
          ],
        },
      ]}
    />
  );
};
export default NavMenu;

/* <ul>
        <li>
          <Link to="/">AllQuestions</Link>
        </li>
        <li>
          <Link to="/MyQuestions">MyQuestions</Link>
        </li>
        <li>
          <Link to="/Question/2">Question</Link>
        </li>
      </ul> */
