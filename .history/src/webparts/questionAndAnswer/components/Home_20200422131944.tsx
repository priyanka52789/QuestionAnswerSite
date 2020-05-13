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
    //setSelectedKey(item.props.itemKey);
    if (selectedKey == "AllQuestions") {
      location.hash = "#/AllQuestions";
    } else if (selectedKey == "MyQuestions") {
      location.hash = "#/MyQuestions";
    }
  };

  return (
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
