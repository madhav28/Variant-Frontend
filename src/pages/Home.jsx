import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col as={Link} to={"/home/products"}>
          <CardComponent title={"Product Catalog"} />
        </Col>
        <Col as={Link} to={"/home/services"}>
          <CardComponent title={"Services"} />
        </Col>
        <Col as={Link} to={"/home/packages"}>
          <CardComponent title={"Packages"} />
        </Col>
      </Row>
      <Row>
        <Col as={Link} to={"/home/customers"}>
          <CardComponent title={"Customers"} />
        </Col>
        <Col as={Link} to={"/home/suppliers"}>
          <CardComponent title={"Suppliers"} />
        </Col>
        <Col as={Link} to={"/home/vendors"}>
          <CardComponent title={"Vendors"} />
        </Col>
        <Col as={Link} to={"/home/associates"}>
          <CardComponent title={"Associates"} />
        </Col>
      </Row>
      <Row>
        <Col as={Link} to={"/home/locations"}>
          <CardComponent title={"Locations"} />
        </Col>
        <Col as={Link} to={"/home/employees"}>
          <CardComponent title={"Employees"} />
        </Col>
        <Col as={Link} to={"/home/resources"}>
          <CardComponent title={"Resources"} />
        </Col>
        <Col as={Link} to={"/home/consignment"}>
          <CardComponent title={"Consignment"} />
        </Col>
      </Row>
      <Row>
        <Col as={Link} to={"/home/chart_of_accounts"}>
          <CardComponent title={"Chart of Accounts"} />
        </Col>
        <Col as={Link} to={"/home/tax_codes"}>
          <CardComponent title={"Tax Codes"} />
        </Col>
        <Col as={Link} to={"/home/tax_authorities"}>
          <CardComponent title={"Tax Authorities"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
