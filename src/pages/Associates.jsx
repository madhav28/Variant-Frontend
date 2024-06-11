import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AssociatesGrid from "./AssociatesGrid";

const Associates = () => {
  return (
    <Tabs defaultActiveKey="associates" id="uassociates-tab" className="mb-3">
      <Tab eventKey="associates" title="Associates">
        <AssociatesGrid />
      </Tab>
      <Tab eventKey="new_associate" title="New Associate" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Associates;
