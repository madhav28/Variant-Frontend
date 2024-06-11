import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SuppliersGrid from "./SuppliersGrid";

const Suppliers = () => {
  return (
    <Tabs defaultActiveKey="suppliers" id="usuppliers-tab" className="mb-3">
      <Tab eventKey="suppliers" title="Suppliers">
        <SuppliersGrid />
      </Tab>
      <Tab eventKey="new_supplier" title="New Supplier" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Suppliers;
