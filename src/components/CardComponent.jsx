import Card from "react-bootstrap/Card";

const CardComponent = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
