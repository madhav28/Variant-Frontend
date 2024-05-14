import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardComponent title={"Product Catalog"} />
        </Col>
        <Col>
          <CardComponent title={"Services"} />
        </Col>
        <Col>
          <CardComponent title={"Packages"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardComponent title={"Customers"} />
        </Col>
        <Col>
          <CardComponent title={"Suppliers"} />
        </Col>
        <Col>
          <CardComponent title={"Vendors"} />
        </Col>
        <Col>
          <CardComponent title={"Associates"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardComponent title={"Locations"} />
        </Col>
        <Col>
          <CardComponent title={"Employees"} />
        </Col>
        <Col>
          <CardComponent title={"Resources"} />
        </Col>
        <Col>
          <CardComponent title={"Consignment"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardComponent title={"Chart of Accounts"} />
        </Col>
        <Col>
          <CardComponent title={"Tax Codes"} />
        </Col>
        <Col>
          <CardComponent title={"Tax Authorities"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
