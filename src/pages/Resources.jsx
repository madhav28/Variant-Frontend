import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ResourcesGrid from "./ResourcesGrid";

const Resources = () => {
  return (
    <Tabs defaultActiveKey="resources" id="uresources-tab" className="mb-3">
      <Tab eventKey="resources" title="Resources">
        <ResourcesGrid />
      </Tab>
      <Tab eventKey="new_resource" title="New Resource" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Resources;
