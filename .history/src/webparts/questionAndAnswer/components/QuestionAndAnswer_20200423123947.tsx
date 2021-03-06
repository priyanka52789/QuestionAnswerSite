import * as React from "react";
import styles from "./QuestionAndAnswer.module.scss";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import PivotMenu from "./PivotMenu";
import Dashboard from "./Dashboard";
import { IconButton, IIconProps } from "office-ui-fabric-react";

const backIcon: IIconProps = { iconName: "Back" };

const QuestionAndAnswer = (props) => {
  return (
    <div
      style={
        props.menuType == "PivotMenu"
          ? { display: "inline-block" }
          : { display: "flex" }
      }
    >
      {(props.menuType == "PivotMenu" && <PivotMenu />) || <NavMenu />}
      <Router>
        <HashRouter>
          <div className={styles.rightContainer}>
            <div className={styles.backCont}>
              <IconButton iconProps={backIcon} title="Back" ariaLabel="Back" />
            </div>
            <Dashboard />
          </div>
        </HashRouter>
      </Router>
    </div>
  );
};
export default QuestionAndAnswer;
