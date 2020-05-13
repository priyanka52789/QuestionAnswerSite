import * as React from "react";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";
import Dashboard from "./Dashboard";

const getTabId = (itemKey: string) => {
  return `ShapeColorPivot_${itemKey}`;
};

const Home = () => {
  const [selectedKey, setSelectedKey] = React.useState("rectangleRed");

  const handleLinkClick = (item: PivotItem) => {
    setSelectedKey(item.props.itemKey!);
  };

  return (
    // <Pivot aria-label="Basic Pivot Example" onLinkClick={setLastHeader}>
    //   <PivotItem
    //     headerText="AllQuestions"
    //     headerButtonProps={{
    //       "data-order": 1,
    //       "data-title": "My Files Title",
    //     }}
    //   >
    //     <AllQuestions />
    //   </PivotItem>
    //   <PivotItem headerText="MyQuestions">
    //     <MyQuestions />
    //   </PivotItem>
    // </Pivot>
    <div>
      <Pivot
        aria-label="Separately Rendered Content Pivot Example"
        selectedKey={selectedKey}
        onLinkClick={handleLinkClick}
        headersOnly={true}
        getTabId={getTabId}
      >
        <PivotItem headerText="Rectangle red" itemKey="rectangleRed" />
        <PivotItem headerText="Square red" itemKey="squareRed" />
        <PivotItem headerText="Rectangle green" itemKey="rectangleGreen" />
      </Pivot>
      <div>
        <Dashboard />
      </div>
    </div>
  );
};
export default Home;
