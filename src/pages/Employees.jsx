import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import EmployeesGrid from "./EmployeesGrid";

const Employees = () => {
  return (
    <Tabs defaultActiveKey="employees" id="uemployees-tab" className="mb-3">
      <Tab eventKey="employees" title="Employees">
        <EmployeesGrid />
      </Tab>
      <Tab eventKey="new_employee" title="New Employee" disabled>
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default Employees;
