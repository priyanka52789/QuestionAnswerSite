import * as React from "react";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";

const getTabId = (itemKey: string) => {
  return `ShapeColorPivot_${itemKey}`;
};

const Home = () => {
  const [selectedKey, setSelectedKey] = React.useState("rectangleRed");

  const handleLinkClick = (item: PivotItem) => {
    setSelectedKey(item.props.itemKey!);
    if (selectedKey == "AllQuestions") {
      location.hash = "#/AllQuestions";
    } else if (selectedKey == "MyQuestions") {
      location.hash = "#/MyQuestions";
    }
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
        <PivotItem headerText="All Questions" itemKey="AllQuestions" />
        <PivotItem headerText="My Questions" itemKey="MyQuestions" />
      </Pivot>
    </div>
  );
};
export default Home;
