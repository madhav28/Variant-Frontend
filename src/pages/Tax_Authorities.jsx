import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaxAuthoritiesGrid from "./TaxAuthoritiesGrid";

const Tax_Authorities = () => {
  return (
    <Tabs
      defaultActiveKey="tax_authorities"
      id="utax-authorities-tab"
      className="mb-3"
    >
      <Tab eventKey="tax_authorities" title="Tax_Authorities">
        <TaxAuthoritiesGrid />
      </Tab>
      <Tab eventKey="new_tax_authority" title="New Tax Authority" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Tax_Authorities;
