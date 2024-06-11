import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import VendorsGrid from "./VendorsGrid";

const Vendors = () => {
  return (
    <Tabs defaultActiveKey="vendors" id="uvendors-tab" className="mb-3">
      <Tab eventKey="vendors" title="Vendors">
        <VendorsGrid />
      </Tab>
      <Tab eventKey="new_vendor" title="New Vendor" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Vendors;
