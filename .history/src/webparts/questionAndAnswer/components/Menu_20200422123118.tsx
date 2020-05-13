import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
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
  function _onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item && item.name === "News") {
      alert("News link clicked");
    }
  }
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key1"
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
export default Menu;

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
