import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomersGrid from "./CustomersGrid";

const Customers = () => {
  return (
    <Tabs defaultActiveKey="customers" id="ucustomers-tab" className="mb-3">
      <Tab eventKey="customers" title="Customers">
        <CustomersGrid />
      </Tab>
      <Tab eventKey="new_customer" title="New Customer" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Customers;
