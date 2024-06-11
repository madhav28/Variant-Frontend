import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ConsignmentGrid from "./ConsignmentGrid";

const Consignment = () => {
  return (
    <Tabs defaultActiveKey="consignment" id="uconsignment-tab" className="mb-3">
      <Tab eventKey="consignment" title="Consignment">
        <ConsignmentGrid />
      </Tab>
      <Tab eventKey="new_consignment" title="New Consignment" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Consignment;
