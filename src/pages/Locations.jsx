import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LocationsGrid from "./LocationsGrid";

const Locations = () => {
  return (
    <Tabs defaultActiveKey="locations" id="ulocations-tab" className="mb-3">
      <Tab eventKey="locations" title="Locations">
        <LocationsGrid />
      </Tab>
      <Tab eventKey="new_location" title="New Location" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Locations;
