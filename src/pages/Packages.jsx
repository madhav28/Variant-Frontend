import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PackagesGrid from "./PackagesGrid";

const Packages = () => {
  return (
    <Tabs defaultActiveKey="packages" id="upackages-tab" className="mb-3">
      <Tab eventKey="packages" title="Packages">
        <PackagesGrid />
      </Tab>
      <Tab eventKey="new_package" title="New Package" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Packages;
