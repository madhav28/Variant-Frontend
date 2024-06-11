import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <Tabs defaultActiveKey="services" id="uservices-tab" className="mb-3">
      <Tab eventKey="services" title="Services">
        <ServicesGrid />
      </Tab>
      <Tab eventKey="new_service" title="New Service" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Services;
