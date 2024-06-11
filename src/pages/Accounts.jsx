import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccountsGrid from "./AccountsGrid";

const Accounts = () => {
  return (
    <Tabs defaultActiveKey="accounts" id="uaccounts-tab" className="mb-3">
      <Tab eventKey="accounts" title="Accounts">
        <AccountsGrid />
      </Tab>
      <Tab eventKey="new_account" title="New Account" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Accounts;
