import * as React from "react";
import {
  Pivot,
  PivotItem,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";
import AllQuestions from "./AllQuestions";
import MyQuestions from "./MyQuestions";

const Home = () => {
  const [lastHeader, setLastHeader] = React.useState<
    { props: IPivotItemProps } | undefined
  >(undefined);

  return (
    <Pivot aria-label="Basic Pivot Example" onLinkClick={setLastHeader}>
      <PivotItem
        headerText="AllQuestions"
        headerButtonProps={{
          "data-order": 1,
          "data-title": "My Files Title",
        }}
      >
        <AllQuestions />
      </PivotItem>
      <PivotItem headerText="MyQuestions">
        <MyQuestions />
      </PivotItem>
    </Pivot>
  );
};
export default Home;
