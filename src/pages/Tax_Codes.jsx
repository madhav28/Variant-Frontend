import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TaxCodesGrid from "./TaxCodesGrid";

const Tax_Codes = () => {
  return (
    <Tabs defaultActiveKey="tax_codes" id="utax-codes-tab" className="mb-3">
      <Tab eventKey="tax_codes" title="Tax_Codes">
        <TaxCodesGrid />
      </Tab>
      <Tab eventKey="new_tax_code" title="New Tax Code" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Tax_Codes;
